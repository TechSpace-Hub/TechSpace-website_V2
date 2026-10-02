// Converts every JPEG/PNG in src/assets to WebP.
// Picks the highest quality (72, 66, 62) whose output is at least as small
// as the source file, so no image grows. Source files are left untouched.
// Usage: npm run images:webp
import { readdir, stat, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const assetsDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/assets",
);

const files = (await readdir(assetsDir))
  .filter((name) => /\.(jpe?g|png)$/i.test(name))
  .sort();

if (files.length === 0) {
  console.log("No JPEG/PNG files found in src/assets.");
  process.exit(0);
}

let totalBefore = 0;
let totalAfter = 0;

for (const name of files) {
  const input = path.join(assetsDir, name);
  const output = input.replace(/\.(jpe?g|png)$/i, ".webp");

  const before = (await stat(input)).size;
  // .rotate() applies EXIF orientation (no-op when absent) before encoding.
  let encoded = null;
  for (const quality of [72, 66, 62]) {
    const buffer = await sharp(input).rotate().webp({ quality, effort: 6 }).toBuffer();
    encoded = { buffer, quality };
    if (buffer.length <= before) break;
  }
  await writeFile(output, encoded.buffer);
  const after = encoded.buffer.length;

  totalBefore += before;
  totalAfter += after;

  const savedPct = (100 - (after / before) * 100).toFixed(0);
  console.log(
    `${name.padEnd(34)} ${String(Math.round(before / 1024)).padStart(5)} KB -> ${String(Math.round(after / 1024)).padStart(5)} KB  (-${savedPct}%)  q${encoded.quality}`,
  );
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB (-${(100 - (totalAfter / totalBefore) * 100).toFixed(0)}%) across ${files.length} images.`,
);
