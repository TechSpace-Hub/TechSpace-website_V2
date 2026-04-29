import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  { question: "Who can join Tech Space?", answer: "" },
  { question: "Do I need prior experience?", answer: "" },
  { question: "How do opportunities work?", answer: "" },
  { question: "Is membership free?", answer: "" },
  {
    question: "How can companies hire talents?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(4);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-16 bg-white sm:py-20 md:py-24 sm:px-6 md:px-12">
      <div className="max-w-3xl mx-auto md:max-w-4xl">
        <div className="mb-12 text-center md:mb-16">
         <h2 className="w-full max-w-128.75 h-13.5 text-[22px] sm:text-[26px] md:text-[36px] leading-[100%] tracking-[0.01em] text-[#2E2E2E] text-center font-semibold font-[Poppins] opacity-100 flex items-center justify-center mx-auto">
     Frequently asked questions</h2>
          <p className="text-[#7A7A7A] text-[13px] sm:text-[14px] md:text-[15px] mt-2 sm:mt-3">
            We’re happy to answer your questions
          </p>
        </div>
        <div className="border-t border-[#DEDEDE]" />
        <div>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="border-b border-[#E5E5E5]">
                <button
                  onClick={() => toggle(index)}
                  className="flex items-center justify-between w-full gap-4 py-5 text-left sm:py-6"
                >
                  <span className="font-['poppins'] text-[15px] sm:text-[16px] md:text-[17px] text-[#2C2C2C] leading-snug">
                    {faq.question}
                  </span>

                  <div
                    className={`min-w-9 min-h-9 sm:min-w-15 sm:min-h-15 flex items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#E74C3C] text-white"
                        : "bg-[#EFEFEF] text-[#6B6B6B]"
                    }`}
                  >
                    {isOpen ? <X size={16} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && faq.answer && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#7A7A7A] text-[13px] sm:text-[14px] leading-relaxed pb-5 sm:pb-6 pr-2 sm:pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}