import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-[var(--color-bg-main)] overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[85vh] lg:min-h-[90vh] justify-around items-stretch">
        {/* Left: Image sticks to bottom of hero, arch at top only */}
        <div className="relative order-2 lg:order-1 flex justify-around lg:justify-end items-end lg:items-end lg:pr-4 xl:pr-8 flex-shrink-0 self-end lg:self-end">
          <div className="relative w-full max-w-[700px] lg:max-w-[1100px] h-full min-h-[550px] lg:min-h-[700px] aspect-[4/5] lg:aspect-[3/4]">
            {/* Arch at top only - no radius on bottom */}
            <div
              className="absolute inset-0 overflow-hidden border-x border-t border-[#d4c5e0]/60"
              style={{ borderRadius: "50% 50% 0 0" }}
            >
              <div
                className="absolute -inset-4 blur-2xl opacity-40 z-0"
                style={{
                  background: "#d4c5e0",
                  borderRadius: "50% 50% 0 0",
                }}
              />
              <Image
                src="/images/daiga-ellaby-M2P08N9zi2k-unsplash.webp"
                alt="Person holding bouquet of purple lilac flowers"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center z-10"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2 flex justify-around lg:justify-start items-center py-12 lg:py-0 self-center">
          <Container 
            className="max-w-3xl flex flex-col items-center text-center"
          >
            <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[6rem] leading-[1.1] font-medium text-[#3d4a3d] tracking-tight mb-6">
              Live your life in full bloom
            </h1>
            <p className="text-lg md:text-xl text-[#5a6b5a]/90 leading-relaxed mb-10 max-w-md">
            A mindful approach to wellness and growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="#book">BOOK A FREE CONSULTATION</Button>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
