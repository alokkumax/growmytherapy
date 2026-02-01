"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "Do you take insurance?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    question: "What are your rates?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    question: "Do you have any openings?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[var(--color-bg-main)]">
      <div className="grid lg:grid-cols-2 min-h-0">
        {/* Left: Dried plants image with arched frame */}
        <div className="relative flex items-center justify-center lg:justify-end py-16 lg:py-24 order-2 lg:order-1">
          <div className="relative w-full max-w-[400px] aspect-[4/5]">
            <div
              className="absolute inset-0 overflow-hidden border border-[#d4c5e0]/60"
              style={{ borderRadius: "50% 50% 0 0" }}
            >
              <Image
                src="/images/myxa69-APKZU4NJcgs-unsplash.webp"
                alt="Dried purple plants in vase"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Right: FAQ accordion */}
        <div className="flex items-center justify-center lg:justify-start py-16 lg:py-24 order-1 lg:order-2">
          <Container className="max-w-xl">
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-medium text-[#3d4a3d] mb-12">
              FAQs
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="border-b border-[#d4c5e0]/60"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center gap-3 py-4 text-left text-lg font-medium text-[#3d4a3d] hover:opacity-80 transition-opacity"
                  >
                    <span className="w-2 h-2 bg-[#3d4a3d] shrink-0" />
                    {faq.question}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`ml-auto shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-90" : ""
                      }`}
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="pb-4 pl-5 text-[#5a6b5a]/90 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
