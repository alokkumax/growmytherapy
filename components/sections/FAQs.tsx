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
    <section className="bg-[var(--color-bg-main)] py-24 lg:py-32">
      <Container>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-16 lg:gap-24">

          {/* ================= IMAGE ================= */}
          {/* LEFT IMAGE */}
<div
  data-aos="fade-up"
  className="w-full flex justify-center xl:justify-center mb-10 lg:mb-0 order-2 lg:order-1"
>
  <div
   className="
   relative
   w-[55%]
   sm:w-[35%]
   md:w-[30%]
   lg:w-[80%]
   xl:w-[75%]
   max-w-[500px]
 "
 
  >
    <div
      className="relative overflow-hidden"
      style={{
        borderTopLeftRadius: "400px",
        borderTopRightRadius: "400px",
      }}
    >
      <Image
        src="/images/myxa69-APKZU4NJcgs-unsplash.webp"
        alt="Dried purple plants"
        width={800}
        height={1000}
        priority
        className="w-full h-auto object-cover object-top"
        unoptimized
      />
    </div>
  </div>
</div>


          {/* ================= FAQ CONTENT ================= */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="order-1 lg:order-2 w-full"
          >
            <h2 className="text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] leading-[1.1] font-medium text-[#2f3e2f] mb-12 text-center lg:text-left">
              FAQs
            </h2>

            <div className="border-t border-[#2f3e2f]/40">

              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-[#2f3e2f]/40"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="w-full flex items-center gap-6 py-8 text-left"
                    >
                      {/* Plus Icon */}
                      <span className="relative w-5 h-5 shrink-0">
                        <span className="absolute inset-0 bg-[#2f3e2f] h-[2px] top-1/2 -translate-y-1/2" />
                        <span
                          className={`absolute inset-0 bg-[#2f3e2f] w-[2px] left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
                            isOpen ? "opacity-0" : "opacity-100"
                          }`}
                        />
                      </span>

                      {/* Question */}
                      <span className="text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-medium text-[#2f3e2f] leading-[1.2]">
                        {faq.question}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-40 opacity-100 pb-8" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-[18px] leading-[1.8] text-[#2f3e2f] pl-11">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
