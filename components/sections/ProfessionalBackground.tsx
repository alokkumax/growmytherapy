"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

const sections = [
  {
    title: "Education",
    content:
      "Dr. Maya Reynolds earned her Doctorate in Clinical Psychology (PsyD) and has extensive training in anxiety disorders, trauma recovery, and burnout prevention. Her academic background emphasizes evidence-based and trauma-informed care.",
  },
  {
    title: "Licensure",
    content:
      "Dr. Reynolds is a licensed clinical psychologist practicing in Santa Monica, California. She provides therapy services for adults navigating anxiety, trauma, and major life transitions.",
  },
  {
    title: "Specialized Training",
    content:
      "She has advanced training in Cognitive Behavioral Therapy (CBT) and trauma-informed interventions. Her work integrates research-backed techniques with compassionate, client-centered care.",
  },
];


export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // first open like target

  return (
    <section className="bg-[var(--color-bg-soft)] py-20 lg:py-28">
      <Container>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-center text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem] leading-[1.1] font-medium text-[var(--color-text-main)] mb-16"
        >
          My Professional Background
        </h2>

        <div data-aos="fade-up" className="max-w-[800px] mx-auto border-t border-[#2f3e2f]/40">

          {sections.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={section.title}
                className="border-b border-[#2f3e2f]/40"
              >
                {/* Header Row */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="text-[1.6rem] md:text-[1.8rem] font-medium text-[var(--color-text-main)]">
                    {section.title}
                  </span>

                  {/* Plus / Minus */}
                  <span className="text-[1.6rem] text-[#2f3e2f]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Animated Content */}
                <div 
  className={`
    overflow-hidden
    transition-all
    duration-500
    ease-in-out
    ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
  `}
>
  <div className="pt-6 pb-10 pl-8 md:pl-16 lg:pl-20 max-w-[720px]">
    <p className="text-[17px] md:text-[18px] leading-[1.9] text-[var(--color-text-light)]">
      {section.content}
    </p>
  </div>
</div>

              </div>
            );
          })}

        </div>
      </Container>
    </section>
  );
}
