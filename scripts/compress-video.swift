// Compress a video for web use (hero/background loops) on macOS — no ffmpeg required.
//
// Usage:
//   swift scripts/compress-video.swift <input> <output> [maxWidth=960] [bitrate=850000] [posterPath]
//
// - Scales down to maxWidth (keeps aspect, forces even dimensions), re-encodes H.264
//   at the given average bitrate, drops any audio track, adds fast-start (moov atom
//   at the front) for progressive streaming, and keeps ~1s keyframe intervals so the
//   loop restarts cleanly.
// - Optionally writes the first frame as a PNG poster (convert it to WebP afterwards).

import AppKit
import AVFoundation
import CoreImage
import Foundation

func fail(_ message: String) -> Never {
    FileHandle.standardError.write((message + "\n").data(using: .utf8)!)
    exit(1)
}

let args = CommandLine.arguments
guard args.count >= 3 else {
    fail("usage: swift compress-video.swift <input> <output> [maxWidth=960] [bitrate=850000] [posterPath]")
}

let inputURL = URL(fileURLWithPath: args[1])
let outputURL = URL(fileURLWithPath: args[2])
let maxWidth = args.count > 3 ? (Int(args[3]) ?? 960) : 960
let bitrate = args.count > 4 ? (Int(args[4]) ?? 850_000) : 850_000
let posterPath = args.count > 5 ? args[5] : nil

let fm = FileManager.default
guard fm.fileExists(atPath: inputURL.path) else { fail("error: input not found: \(inputURL.path)") }
try? fm.removeItem(at: outputURL)

let sourceKB = ((try? fm.attributesOfItem(atPath: inputURL.path))?[.size] as? Int ?? 0) / 1024

let asset = AVURLAsset(url: inputURL)
guard let track = asset.tracks(withMediaType: .video).first else {
    fail("error: no video track found in \(inputURL.lastPathComponent)")
}

let srcSize = track.naturalSize
let scale = min(1.0, Double(maxWidth) / Double(srcSize.width))
let outW = max(2, Int((srcSize.width * scale).rounded()) & ~1)
let outH = max(2, Int((srcSize.height * scale).rounded()) & ~1)
let srcFPS = track.nominalFrameRate > 0 ? Int(track.nominalFrameRate.rounded()) : 30

// Optionally extract the first frame as a poster image (before transcoding).
if let posterPath = posterPath {
    do {
        let posterReader = try AVAssetReader(asset: asset)
        let posterOutput = AVAssetReaderTrackOutput(
            track: track,
            outputSettings: [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA]
        )
        posterReader.add(posterOutput)
        if posterReader.startReading(),
           let sample = posterOutput.copyNextSampleBuffer(),
           let pixelBuffer = CMSampleBufferGetImageBuffer(sample) {
            let ciImage = CIImage(cvPixelBuffer: pixelBuffer)
            let context = CIContext()
            if let cgImage = context.createCGImage(ciImage, from: ciImage.extent) {
                let rep = NSBitmapImageRep(cgImage: cgImage)
                if let png = rep.representation(using: .png, properties: [:]) {
                    try? png.write(to: URL(fileURLWithPath: posterPath))
                    print("poster: \(posterPath)")
                }
            }
        }
        posterReader.cancelReading()
    } catch {
        print("warning: poster extraction failed: \(error.localizedDescription)")
    }
}

// Reader — outputs scaled BGRA pixel buffers straight from the source track.
let reader: AVAssetReader
do {
    reader = try AVAssetReader(asset: asset)
} catch {
    fail("error: could not create reader: \(error.localizedDescription)")
}
let readerOutput = AVAssetReaderTrackOutput(
    track: track,
    outputSettings: [
        kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA,
        kCVPixelBufferWidthKey as String: outW,
        kCVPixelBufferHeightKey as String: outH,
    ]
)
readerOutput.alwaysCopiesSampleData = false
guard reader.canAdd(readerOutput) else { fail("error: reader rejected output") }
reader.add(readerOutput)

// Writer — H.264, no audio input (any audio track is dropped), fast-start enabled.
let writer: AVAssetWriter
do {
    writer = try AVAssetWriter(outputURL: outputURL, fileType: .mp4)
} catch {
    fail("error: could not create writer: \(error.localizedDescription)")
}
writer.shouldOptimizeForNetworkUse = true

let writerInput = AVAssetWriterInput(
    mediaType: .video,
    outputSettings: [
        AVVideoCodecKey: AVVideoCodecType.h264,
        AVVideoWidthKey: outW,
        AVVideoHeightKey: outH,
        AVVideoCompressionPropertiesKey: [
            AVVideoAverageBitRateKey: bitrate,
            AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
            AVVideoMaxKeyFrameIntervalKey: srcFPS, // ~1s GOP for clean looping
            AVVideoExpectedSourceFrameRateKey: srcFPS,
        ],
    ]
)
writerInput.expectsMediaDataInRealTime = false
guard writer.canAdd(writerInput) else { fail("error: writer rejected input") }
writer.add(writerInput)

guard reader.startReading() else {
    fail("error: reader failed to start: \(reader.error?.localizedDescription ?? "unknown")")
}
guard writer.startWriting() else {
    fail("error: writer failed to start: \(writer.error?.localizedDescription ?? "unknown")")
}
writer.startSession(atSourceTime: .zero)

let semaphore = DispatchSemaphore(value: 0)
let queue = DispatchQueue(label: "techspace.transcode")

writerInput.requestMediaDataWhenReady(on: queue) {
    while writerInput.isReadyForMoreMediaData {
        guard let sample = readerOutput.copyNextSampleBuffer() else {
            writerInput.markAsFinished()
            writer.finishWriting { semaphore.signal() }
            return
        }
        if !writerInput.append(sample) {
            reader.cancelReading()
            writerInput.markAsFinished()
            writer.finishWriting { semaphore.signal() }
            return
        }
    }
}

semaphore.wait()

guard writer.status == .completed else {
    fail("error: transcode failed: \(writer.error?.localizedDescription ?? "unknown status \(writer.status.rawValue)")")
}

let outputKB = ((try? fm.attributesOfItem(atPath: outputURL.path))?[.size] as? Int ?? 0) / 1024
let savings = sourceKB > 0 ? Int((1.0 - Double(outputKB) / Double(sourceKB)) * 100.0) : 0
print("done: \(outW)x\(outH) \(srcFPS)fps @ \(bitrate / 1000)kbps — \(sourceKB)KB -> \(outputKB)KB (-\(savings)%)")
