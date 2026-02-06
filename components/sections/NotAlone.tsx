import Image from "next/image";
import Container from "@/components/ui/Container";

export default function NotAlone() {
  return (
    <section className=" bg-[var(--color-accent)]">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-[950px]">
        {/* Image */}
        <div data-aos="fade-up"
          className="
    relative
    w-full
    aspect-[4/3]
    lg:aspect-auto
    lg:min-h-full
    order-1
    overflow-hidden
  "
        >
          <div className="relative w-full h-full animate-[fadeUp_0.8s_ease-out]">
            <Image
              src="/images/fulfiling.jpg"
              alt="Woman with contemplative expression"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col bg-[var(--color-accent)] order-2">
          <div className="py-20 lg:py-24 flex-1 flex items-center">
          <Container className="max-w-[720px] w-full">
  <h2
    data-aos="fade-up"
    className="
      text-[2.6rem]
      md:text-[3.2rem]
      lg:text-[3.6rem]
      leading-[1.1]
      font-medium
      text-white
      mb-8
    "
  >
    You Don’t Have to Manage This Alone
  </h2>

  <p data-aos="fade-up" className="text-[18px] text-white mb-8">
    You may appear capable and composed on the outside, yet internally feel overwhelmed, anxious, or emotionally exhausted.
  </p>

  <ul
    data-aos="fade-up"
    className="space-y-4 text-[17px] text-white leading-[1.8] mb-12 list-disc pl-6"
  >
    <li className="text-white">Persistent anxiety or racing thoughts</li>
    <li  className="text-white">Difficulty relaxing or “switching off”</li>
    <li  className="text-white">Emotional burnout from work or caregiving</li>
    <li  className="text-white">Unresolved trauma impacting daily life</li>
    <li  className="text-white">Feeling disconnected from yourself or others</li>
  </ul>

  <p data-aos="fade-up" className="text-[17px] text-white leading-[1.8]">
    Therapy provides a structured, supportive space to explore these patterns, develop practical coping tools, and build lasting resilience.
  </p>
</Container>

          </div>

          {/* Bottom CTA Strip */}
          <div
  data-aos="fade-up"
  data-aos-delay="200"
  className="border-t border-white/40"
>
  <div
    className="
      group
      py-8
      cursor-pointer
      transition-all
      duration-500
      ease-in-out
      hover:bg-white
    "
  >
    <div className="flex justify-center">
      <span
        className="
          text-[14px]
          tracking-[0.18em]
          font-medium
          text-white
          transition-colors
          duration-500
          ease-in-out
          group-hover:text-black/50
        "
      >
        SCHEDULE A CONSULTATION →
      </span>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
