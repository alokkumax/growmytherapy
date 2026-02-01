import Image from "next/image";
import Container from "@/components/ui/Container";
import Button2 from "@/components/ui/Button2";

export default function NotAlone() {
  return (
    <section className="bg-[var(--color-bg-main)]">
      <div className="grid lg:grid-cols-2 min-h-0">
        {/* Left: Woman image */}
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
          <Image
            src="/images/ivana-cajina--wn1PECo5-U-unsplash.webp"
            alt="Woman with contemplative expression"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            unoptimized
          />
        </div>

        {/* Right: Lavender content */}
        <div className="bg-[#b8a9c9] flex items-center justify-center lg:justify-start py-16 lg:py-24">
          <Container className="max-w-xl">
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-tight font-medium text-white mb-6">
              You, don&apos;t have to do this all alone.
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-10">
              Ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus interdum
              posuere.
            </p>
            <Button2 href="#book" variant="light">
              GET STARTED
            </Button2>
          </Container>
        </div>
      </div>
    </section>
  );
}
