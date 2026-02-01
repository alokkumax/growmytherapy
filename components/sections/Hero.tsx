"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-[var(--color-bg-main)] pt-[150px] lg:pt-[90px] overflow-hidden">

      <Container className="flex flex-col lg:grid lg:grid-cols-2 items-center min-h-[85vh] lg:min-h-[88vh]">

        {/* Image */}
        <div className="w-full flex justify-center mb-10 lg:mb-0">
          <div
            className="
              relative
              w-[68%]
              sm:w-[55%]
              md:w-[50%]
              lg:w-full
              max-w-[680px]
              aspect-[4/5]
            "
          >
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ borderRadius: "50% 50% 0 0" }}
            >
              <Image
                src="/images/daiga-ellaby-M2P08N9zi2k-unsplash.webp"
                alt="Person holding bouquet"
                fill
                priority
                className="object-cover object-top"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full flex justify-center">
          <div className="max-w-[620px] text-center">

            <h1
              className="
                text-[3.1rem]
                sm:text-[3.4rem]
                md:text-[3.6rem]
                lg:text-[3.8rem]
                xl:text-[4rem]
                leading-[1.08]
                font-medium
                text-[#2f3e2f]
                mb-6
              "
            >
              Live your life
              <br />
              in full bloom
            </h1>

            <p
              className="
                text-[16px]
                sm:text-[17px]
                md:text-[18px]
                text-[#3f4f3f]
                leading-relaxed
                mb-10
              "
            >
              Therapy for Adults in Minneapolis, MN.
            </p>

            <Button
              href="#contact"
              className="
                text-[12px]
                sm:text-[13px]
                px-6
                py-3
                border
                border-[#2f3e2f]
                bg-transparent
                text-[#2f3e2f]
                hover:bg-[#2f3e2f]
                hover:text-white
              "
            >
              CONNECT WITH ME →
            </Button>

          </div>
        </div>

      </Container>
    </section>
  );
}
