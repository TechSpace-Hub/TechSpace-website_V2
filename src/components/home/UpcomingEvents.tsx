import { useState } from "react";

const EVENTS = [
  {
    id: 1,
    title: "The Family Reunion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    image: "images/event3.jpg",
  },
  {
    id: 2,
    title: "The Tech Summit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    image: "images/event.jpg",
  },
  {
    id: 3,
    title: "Community Meetup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    image: "images/event2.jpg",
  },
];

const UpcomingEvents = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? EVENTS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === EVENTS.length - 1 ? 0 : c + 1));

  const event = EVENTS[current];

  return (
    <section className="w-full px-4 py-12 bg-white sm:py-16">
      <div className="mb-10 text-center sm:mb-12">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Upcoming Events
        </h2>
        <p className="max-w-md mx-auto text-gray-500 text-md">
          Our events are where learning meets laughter, and strangers become family.
        </p>
      </div>

      <div className="flex items-center justify-center max-w-5xl gap-6 mx-auto sm:gap-8">

        <svg
          onClick={prev}
          role="button"
          aria-label="Previous event"
          className="w-5 h-5 text-gray-500 transition-all duration-200 cursor-pointer sm:w-6 sm:h-6 hover:text-gray-900 hover:-translate-x-1 active:scale-90"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>

        <div
          className="
            flex flex-col lg:flex-row items-stretch
            w-full max-w-225
            lg:h-[410.25px]
            rounded-3xl
            overflow-hidden
            border border-gray-100
            shadow-sm hover:shadow-md
            transition-all duration-300">

          <div
            className="
              w-full 
              h-65 sm:h-80
              lg:w-[373.33px]
              lg:h-full
              shrink-0
              overflow-hidden
              bg-gray-100">
            <img
              key={event.id}
              src={event.image}
              alt={event.title}
              className="object-cover object-center w-full h-full"/>
          </div>
          <div
            className="
              w-full 
              lg:w-[522.67px]
              lg:h-full
              flex flex-col justify-center
              p-2 sm:p-8
              bg-gray-50">
            <h3 className="mb-4 text-gray-900 font-['Poppins'] text-[20px] sm:text-[24px] font-semibold">
              {event.title}
            </h3>

            <p className="text-gray-600 font-['Inter'] text-[14px] sm:text-[18px] leading-relaxed">
              {event.description}
            </p>
          </div>

        </div>

        <svg
          onClick={next}
          role="button"
          aria-label="Next event"
          className="w-5 h-5 text-gray-500 transition-all duration-200 cursor-pointer sm:w-6 sm:h-6 hover:text-gray-900 hover:translate-x-1 active:scale-90"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>

      </div>
      <div className="flex items-center justify-center gap-2 mt-8">
        {EVENTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to event ${i + 1}`}
            className={[
              "rounded-full transition-all duration-300",
              i === current
                ? "w-2.5 h-2.5 bg-red-400"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400",
            ].join(" ")}
          />
        ))}
      </div>

    </section>
  );
};

export default UpcomingEvents;