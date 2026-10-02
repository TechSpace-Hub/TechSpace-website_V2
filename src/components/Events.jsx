import { useState } from "react";
import indoorPicnicImg from "../assets/indoor-picnic.webp";
import familyReunionBeachImg from "../assets/family-reunion-beach.webp";
import familyReunion2Img from "../assets/family-reunion2.0.webp";
import theConversationImg from "../assets/the-conversation.webp";

const events = [
  {
    title: "The Indoor Picnic",
    description:
      "An intimate and wholesome community experience by The Tech Space, bringing together techies, creatives, developers, writers, and more. Beyond networking, it was about building trust, chemistry, genuine connections, and community.",
    date: "August 17th, 2025",
    image: indoorPicnicImg,
  },
  {
    title: "The Family Reunion – Beach Edition",
    description:
      "A relaxed community experience that brought together tech enthusiasts, designers, developers, founders, and creatives for a day ofgames, connection, collaboration, and fun by the beach.",
    date: "Nov 22nd, 2025",
    image: familyReunionBeachImg,
  },
  {
    title: "The Family Reunion 2.0",
    description:
      "A cross-border community experience that took The Tech Space beyond Nigeria to the Benin Republic. More than a trip, it was a celebration of our journey, our people, cultural and business exchange, and the power of community to create meaningful connections beyond borders.",
    date: "March 31st, 2026",
    image: familyReunion2Img,
  },
  {
    title: "The Conversation",
    description:
      "An intimate black-tie dinner by The Tech Space centred around meaningful conversations on purpose, leadership, careers, and personal growth. An evening to connect, reflect, and build relationships beyond the usual networking.",
    date: "July 25th, 2026",
    image: theConversationImg,
  },
];

export default function Events() {
  const [index, setIndex] = useState(0);
  const event = events[index];

  const prev = () => setIndex((i) => (i === 0 ? events.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === events.length - 1 ? 0 : i + 1));

  return (
    <section id="events" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-accent">Past/Upcoming Events</h2>
        <p className="text-ink-soft mt-4">
          Our events are where learning meets laughter, and strangers become family.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-12 relative">
        <div className="flex flex-col md:flex-row gap-5 items-stretch md:min-h-[390px]">
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            decoding="async"
            className="w-full h-[390px] md:h-auto md:w-[48%] rounded-2xl object-cover bg-gray-200"
          />
          <div className="w-full md:w-[52%] bg-surface rounded-2xl p-7 md:p-8 flex flex-col justify-center text-center md:text-left">
            <h3 className="font-display font-semibold text-xl md:text-2xl">{event.title}</h3>
            <p className="text-ink-soft mt-3 text-sm md:text-base leading-relaxed">{event.description}</p>
            <p className="text-ink-soft mt-5 flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm font-medium">
              <span aria-hidden="true">📅</span> {event.date}
            </p>
          </div>
        </div>

        <button
          onClick={prev}
          aria-label="Previous event"
          className="flex items-center justify-center absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Next event"
          className="flex items-center justify-center absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
        >
          →
        </button>

        <div className="flex items-center justify-center gap-2 mt-6">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show event ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? "bg-accent" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}