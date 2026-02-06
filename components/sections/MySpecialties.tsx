import Image from "next/image";
import Container from "@/components/ui/Container";

const specialties = [
  {
    title: "Anxiety Therapy",
    description:
      "Individual therapy in Santa Monica focused on helping adults manage chronic anxiety, racing thoughts, perfectionism, and high-functioning stress using evidence-based approaches such as CBT and mindfulness-based interventions.",
    image: "/images/1special.webp",
  },
  {
    title: "Trauma & PTSD Treatment",
    description:
      "Trauma-informed therapy designed to help you process unresolved experiences, regulate emotional responses, and rebuild a sense of safety and stability using research-supported methods.",
    image: "/images/2special.avif",
  },
  {
    title: "Burnout & Life Transitions",
    description:
      "Support for professionals experiencing burnout, career overwhelm, or major life transitions. Therapy focuses on resilience-building, boundary setting, and restoring emotional balance.",
    image: "/images/3special.jpeg",
  },
];


export default function MySpecialties() {
  return (
    <section id="services" className=" bg-[var(--color-bg-main)] py-20 md:py-28 lg:py-36">
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
          Areas of Focus

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {specialties.map((item) => (
            <div
              key={item.title}
              data-aos="fade-up"
              // data-aos-delay="400"
              className="
              bg-[var(--color-bg-soft)]
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
