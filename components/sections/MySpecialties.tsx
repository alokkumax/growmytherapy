import Image from "next/image";
import Container from "@/components/ui/Container";

const specialties = [
  {
    title: "Self-Esteem",
    description:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: "/images/ori-song-LPbKfdQJS2E-unsplash.webp",
  },
  {
    title: "Relationships",
    description:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: "/images/valeriia-miller-5jR4rAMs5tk-unsplash+(1).webp",
  },
  {
    title: "Burnout",
    description:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: "/images/milles-studio-GU-Q4-SQFTg-unsplash.webp",
  },
];

export default function MySpecialties() {
  return (
    <section className=" bg-[var(--color-bg-main)] py-20 md:py-28 lg:py-36">
      <Container>
        {/* Section Heading */}
        <h2 
        data-aos="fade-up"
        // data-aos-delay="400"
        className="
          text-center
          text-[2rem]
          sm:text-[2.3rem]
          md:text-[3rem]
          lg:text-[3.6rem]
          font-medium
          text-[#2f3e2f]
          mb-16 md:mb-20 lg:mb-24
        ">
          My Specialties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {specialties.map((item) => (
            <div
              key={item.title}
              data-aos="fade-up"
              // data-aos-delay="400"
              className="
              bg-[#e5e0da]
                border border-[#2f3e2f]
                px-6 py-8
                sm:px-8 sm:py-10
                lg:px-10 lg:py-12
                flex flex-col
                min-h-[520px]
                md:min-h-[600px]
                lg:min-h-[680px]
              "
            >
              <h3 
              data-aos="fade-up"
              data-aos-delay="200"
              className="
              
                text-[1.1rem]
                sm:text-[1.2rem]
                lg:text-[1.4rem]
                font-medium
                text-[#2f3e2f]
                mb-4 sm:mb-6
              ">
                {item.title}
              </h3>

              <p 
              data-aos="fade-up"
              data-aos-delay="300"
              className="
                text-[#3f4f3f]
                text-[15px]
                sm:text-[16px]
                leading-[1.8]
                mb-8 sm:mb-10
              ">
                {item.description}
              </p>

              {/* Circle Image */}
              <div
              data-aos="fade-up"
              data-aos-delay="400" className="
                relative
                w-full
                aspect-square
                max-w-[260px]
                sm:max-w-[300px]
                lg:max-w-[380px]
                mx-auto
                mt-auto
              ">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 260px,
                           (max-width: 1024px) 300px,
                           380px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
