import Image from "next/image";
import Container from "@/components/ui/Container";
import Button2 from "@/components/ui/Button2";

export default function FulfillingLife() {
  return (
    <section className="bg-[var(--color-bg-main)]">
      <div className="grid lg:grid-cols-2 min-h-0">
        {/* Left: Text content */}
        <div className="flex items-center justify-center lg:justify-end py-16 lg:py-24">
          <Container className="max-w-xl">
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-tight font-medium text-[#3d4a3d] mb-6">
              Live a fulfilling life.
            </h2>
            <p className="text-lg text-[#5a6b5a]/90 leading-relaxed mb-4">
              Life can be challenging—especially when you&apos;re trying to balance
              your personal and professional life.
            </p>
            <p className="text-lg text-[#5a6b5a]/90 leading-relaxed mb-10">
              It&apos;s easy to feel like you&apos;re alone in facing these challenges,
              but I want you to know that I&apos;m here to help.
            </p>
            <Button2 href="#contact">GET IN TOUCH</Button2>
          </Container>
        </div>

        {/* Right: Flat-lay image */}
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
          <Image
            src="/images/tanya-trukyr-ornZV1YJNNo-unsplash.webp"
            alt="Flat-lay of lilac flowers, coffee mug, journal and lifestyle items"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
