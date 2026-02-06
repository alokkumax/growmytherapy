"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[var(--color-bg-main)] pt-[140px] lg:pt-[100px] overflow-hidden"
    >
      <Container className="flex flex-col lg:grid lg:grid-cols-2 items-center min-h-[88vh]">

        {/* Image */}
        <div className="w-full flex justify-center xl:justify-start mb-10 lg:mb-0">
          <div
            data-aos="fade-up"
            className="
              relative
              w-[55%]
              sm:w-[35%]
              md:w-[30%]
              lg:w-full
              max-w-[580px]
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
                src="/images/therapist-hero.png"
                alt="Dr. Maya Reynolds, Licensed Psychologist in Santa Monica"
                width={800}
                height={1000}
                priority
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className="
            w-full flex items-start justify-center
            lg:pt-28 lg:pr-10 lg:pl-5
            lg:justify-start min-h-full
          "
        >
          <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start pt-6 sm:pt-8 md:pt-10 lg:pt-16">

            {/* H1 */}
            <h1
              data-aos="fade-up"
              className="
                text-[2.2rem]
                sm:text-[2.6rem]
                md:text-[3.2rem]
                lg:text-[4.4rem]
                xl:text-[5.2rem]
                leading-[1.08]
                font-medium
                text-[var(--color-primary)]
              "
            >
              Anxiety, Trauma & Burnout Therapy
              <br />
              <span className="italic text-[var(--color-accent)]">
                in Santa Monica
              </span>
            </h1>

            {/* Subtext */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="
                text-[15px]
                sm:text-[16px]
                md:text-[18px]
                text-[var(--color-text-main)]
                leading-[1.9]
                mb-10
                max-w-[560px]
              "
            >
              Compassionate, evidence-based therapy with Dr. Maya Reynolds, PsyD.
              Helping adults navigate anxiety, trauma, and life transitions with
              clarity and resilience.
            </p>

            {/* CTA */}
            <Button
              href="#contact"
              data-aos="fade-up"
              data-aos-delay="400"
              className="
                text-[13px]
                sm:text-[14px]
                px-7
                py-3
                border
                border-[var(--color-primary)]
                bg-transparent
                text-[var(--color-primary)]
                tracking-[0.15em]
                font-medium
                hover:bg-[var(--color-primary)]
                hover:text-white
                transition-all
                duration-700
              "
            >
              SCHEDULE A CONSULTATION 
            </Button>

          </div>
        </div>

      </Container>
    </section>
  );
}
