import { useState } from "react";

const faqs = [
  {
    q: "Who can join Tech Space?",
    a: "Anyone building a career in tech or creative fields — professionals, founders, and students can apply to join the community.",
  },
  {
    q: "How can companies hire talent from TechSpace?",
    a: "Brands and partners can reach out through our Hire Talent form. We match verified talent to your team based on the shape of the role you need filled.",
  },
  {
    q: "Is TechSpace membership free?",
    a: "Core community access is free. Select programs and the Foundry track have their own application and cohort structure.",
  },
  {
    q: "What opportunities are available to TechSpace members?",
    a: "Members get access to structured learning programs, networking events, job and project placements, and the founder-focused Foundry track.",
  },
  {
    q: "How can I partner or collaborate with TechSpace?",
    a: "Reach out via hello@techspace.ng with a short note about what you have in mind — we review every partnership request personally.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faqs" className="bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl">Frequently asked questions</h2>
        <p className="text-ink-soft mt-3">We're happy to answer your questions</p>
      </div>

      <div className="max-w-3xl mx-auto mt-12 divide-y divide-gray-200">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="py-6">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4"
                aria-expanded={isOpen}
              >
                <span className="font-medium">{item.q}</span>
                <span
                  className={`shrink-0 w-9 h-9 rounded-full bg-surface flex items-center justify-center text-lg transition-transform ${isOpen ? "rotate-45" : ""
                    }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {isOpen && <p className="text-ink-soft mt-4 max-w-2xl">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
