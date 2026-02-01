import Image from "next/image";
import Container from "@/components/ui/Container";

const specialties = [
  {
    title: "The Client",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "/images/ori-song-LPbKfdQJS2E-unsplash.webp",
  },
  {
    title: "Self-love",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "/images/valeriia-miller-5jR4rAMs5tk-unsplash+(1).webp",
  },
  {
    title: "Art",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "/images/milles-studio-GU-Q4-SQFTg-unsplash.webp",
  },
];

export default function MySpecialties() {
  return (
    <section className="bg-[var(--color-bg-main)] py-20 lg:py-28">
      <Container>
        <h2 className="text-center text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-medium text-[#3d4a3d] mb-16">
          My Specialties
        </h2>
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="bg-white/60 border border-[#d4c5e0]/60 rounded-lg p-6 lg:p-8 flex flex-col"
            >
              <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-6 mx-auto shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="112px"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-medium text-[#3d4a3d] mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-[#5a6b5a]/90 leading-relaxed text-center flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
