import Image from "next/image";
import Container from "@/components/ui/Container";

export default function FulfillingLife() {
  return (
    <section className="bg-[var(--color-bg-soft)]">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-[720px]">
        {/* Image (Top on Mobile) */}
        <div
          data-aos="fade-up"
          className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-full order-1 lg:order-2"
        >
          <Image
            src="/images/fullfiling.jpg"
            alt="Flat-lay of lilac flowers, coffee mug, journal and lifestyle items"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            unoptimized
          />
        </div>

        {/* Content */}
        <div data-aos="fade-up" className="flex flex-col order-2 lg:order-1">
          <div className="py-16 lg:py-20 flex-1 flex items-center">
            <Container className="max-w-[720px] w-full">
              <h2
                className="
      text-[2.6rem]
      md:text-[3.2rem]
      lg:text-[3.6rem]
      leading-[1.1]
      font-medium
      text-[#2f3e2f]
      mb-8 tracking-tight
    "
              >
                You Don’t Have to Navigate This Alone
              </h2>

              <p className="text-[18px] text-[#2f3e2f] leading-[1.8] mb-8">
                Many high-achieving adults silently carry anxiety, unresolved
                trauma, or chronic burnout while continuing to meet expectations
                at work and in their personal lives. Over time, this pressure
                can feel overwhelming.
              </p>

              <p className="text-[18px] text-[#2f3e2f] leading-[1.8]">
                Dr. Maya Reynolds provides evidence-based therapy in Santa
                Monica designed to help you better understand your patterns,
                regulate emotional responses, and build resilience—so you can
                move forward with greater clarity and confidence.
              </p>
            </Container>
          </div>

          {/* Bottom CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="border-t border-[#2f3e2f]/30"
          >
            <div
              className="
                group
                py-8
                cursor-pointer
                transition-all
                duration-500
                ease-in-out
                hover:bg-[#2f3e2f]
              "
            >
              <div className="flex justify-center">
                <span
                  className="
                    text-[14px]
                    tracking-[0.18em]
                    font-medium
                    text-[#2f3e2f]
                    transition-colors
                    duration-500
                    ease-in-out
                    group-hover:text-white
                  "
                >
                  GET IN TOUCH →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
