import Image from "next/image";
import Container from "@/components/ui/Container";

export default function HiImLilac() {
  return (
    <section className="bg-[var(--color-bg-main)]">
      <div className="grid lg:grid-cols-2 min-h-0">
        {/* Left: Text content */}
        <div className="flex items-center justify-center lg:justify-end py-16 lg:py-24">
          <Container className="max-w-xl">
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-tight font-medium text-[#3d4a3d] mb-6">
              Hi, I&apos;m Lilac.
            </h2>
            <p className="text-lg text-[#5a6b5a]/90 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <p className="text-lg text-[#5a6b5a]/90 leading-relaxed mb-8">
              Ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus interdum
              posuere.
            </p>
            <p className="text-2xl font-light text-[#3d4a3d] italic">
              — Lilac
            </p>
          </Container>
        </div>

        {/* Right: Images - bouquet with overlapping circular */}
        <div className="relative flex items-center justify-center lg:justify-start py-16 lg:py-24 min-h-[400px]">
          <div className="relative w-full max-w-[400px] lg:max-w-[450px] aspect-[4/5]">
            {/* Main arched image */}
            <div
              className="absolute inset-0 overflow-hidden border border-[#d4c5e0]/60"
              style={{ borderRadius: "50% 50% 0 0" }}
            >
              <Image
                src="/images/lilac+template+white+lilac.webp"
                alt="Bouquet of purple lilac flowers"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-center"
                unoptimized
              />
            </div>
            {/* Overlapping circular image */}
            <div className="absolute -bottom-8 -right-4 lg:right-8 w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[var(--color-bg-main)] shadow-lg z-10">
              <Image
                src="/images/daiga-ellaby-Ct6LBZHaOSc-unsplash.webp"
                alt="White fluffy flowers"
                fill
                sizes="160px"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
