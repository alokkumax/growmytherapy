import Image from "next/image";
import Container from "@/components/ui/Container";

export default function NotAlone() {
  return (
    <section className="bg-[#e5e0da]">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-[720px]">
        {/* Image */}
        <div
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
              src="/images/ivana-cajina--wn1PECo5-U-unsplash.webp"
              alt="Woman with contemplative expression"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col bg-[#b8a9c9] order-2">
          <div className="py-20 lg:py-24 flex-1 flex items-center">
            <Container className="max-w-[720px] w-full">
              <h2
                className="
                text-[2.6rem]
                md:text-[3.2rem]
                lg:text-[3.6rem]
                leading-[1.1]
                font-medium
                text-[#2f3e2f]
                mb-8
              "
              >
                You don’t have to do this all{" "}
                <span className="italic">alone.</span>
              </h2>

              <p className="text-[18px] text-[#2f3e2f] mb-8">
                If you are facing any of these, there’s hope:
              </p>

              <ul className="space-y-4 text-[17px] text-[#2f3e2f] leading-[1.8] mb-12 list-disc pl-6">
                <li>Persistent feelings of sadness or hopelessness</li>
                <li>Trouble focusing or making decisions</li>
                <li>Difficulty maintaining relationships</li>
                <li>Feeling constantly exhausted or unmotivated</li>
                <li>A pervasive sense of being overwhelmed</li>
              </ul>

              <p className="text-[17px] text-[#2f3e2f] leading-[1.8]">
                With empathy and guidance, we'll work together to navigate the
                challenges life throws your way.
              </p>
            </Container>
          </div>

          {/* Bottom CTA Strip */}
          <div className="border-t border-[#2f3e2f]/40">
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
                  GET STARTED →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
