"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-[var(--color-bg-main)] pt-[140px] lg:pt-[90px] overflow-hidden">
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
              max-w-[680px]
              
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
                src="/images/daiga-ellaby-M2P08N9zi2k-unsplash.webp"
                alt="Person holding bouquet"
                width={800}
                height={1000}
                priority
                className="w-full h-auto object-cover object-top"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className="w-full flex items-start justify-center 
        pt-0 pr-0 sm:pt-0 sm:pr-0 lg:pt-40 lg:pr-10 lg:pl-5

        lg:justify-start min-h-full"
        >
          <div className="w-full text-center flex flex-col items-center pt-6 sm:pt-8 md:pt-10 lg:pt-16">
            <h1
              data-aos="fade-up"
              className="
              bg-[()]
                text-[2.2rem]
sm:text-[2.6rem]
md:text-[3.2rem]
lg:text-[5.2rem]
xl:text-[6.5rem]
leading-[1.08]
              
text-[#2f3e2f]
              "
            >
              Live your life
              <br />
              in full bloom
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="
                text-[15px]
                sm:text-[16px]
                md:text-[18px]
                text-[#3f4f3f]
                leading-[1.9]
                mb-10
                              

              "
            >
              Therapy for Adults in Minneapolis, MN.
            </p>

            <Button
              href="#contact"
              data-aos="fade-up"
              data-aos-delay="400"
              className="              

                text-[12px]
                sm:text-[13px]
                px-6 sm:px-7
                py-3
                border
                border-[#2f3e2f]
                bg-transparent
                text-[#2f3e2f]
                hover:bg-[#2f3e2f]
                hover:text-white
                transition-all
                duration-500
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
