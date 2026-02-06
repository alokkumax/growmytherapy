import Image from "next/image";
import Container from "@/components/ui/Container";

export default function OfficeSection() {
  return (
    <section id="office" className="bg-[var(--color-bg-main)] py-24 lg:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div data-aos="fade-up" className="max-w-[640px]">
            <h2 className="text-[2.4rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.1] font-medium text-[#1f2d2a] mb-8">
              A Calm, Private Space in Santa Monica
            </h2>

            <p className="text-[17px] md:text-[18px] leading-[1.9] text-[#2c3e3a] mb-6">
              Dr. Maya Reynolds offers in-person therapy sessions in a quiet,
              thoughtfully designed office in Santa Monica. The space is warm,
              private, and intentionally created to support safety and
              meaningful therapeutic work.
            </p>

            <p className="text-[17px] md:text-[18px] leading-[1.9] text-[#2c3e3a] mb-8">
              Whether you're working through anxiety, trauma, or burnout, the
              environment is designed to help you feel grounded and supported
              from the moment you arrive.
            </p>

            <p className="text-[14px] tracking-[0.15em] text-[#6b7d78]">
              In-person sessions in Santa Monica • Secure virtual therapy
              available
            </p>
          </div>

          {/* Images */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] overflow-hidden rounded-[32px]"
          >
            <Image
              src="/images/office2.jpeg"
              alt="Therapy office in Santa Monica"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
