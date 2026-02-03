import Container from "@/components/ui/Container";
import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="bg-[#7e7b3d] py-24 md:py-28 lg:py-36">

      <Container>
        <div
          data-aos="fade-up"
          className="max-w-[720px] mx-auto text-center"
        >
          {/* Title */}
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="
              text-[2.4rem]
              sm:text-[2.8rem]
              md:text-[3.2rem]
              lg:text-[3.6rem]
              leading-[1.1]
              font-medium
              text-white
              mb-8
            "
          >
            Get started today.
          </h2>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="
              text-[16px]
              sm:text-[17px]
              md:text-[18px]
              leading-[1.9]
              text-white/90
              mb-14
              max-w-[640px]
              mx-auto
            "
          >
            Ready to take the first step towards a happier, healthier you?
            <br className="hidden sm:block" />
            Contact me to book your first session. I look forward to starting
            this therapeutic journey with you.
          </p>

          {/* Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
           <Button
  href="#contact"
  className="
    px-10
    py-4
    border
    border-white
    bg-transparent
    text-white
    text-[13px]
    tracking-[0.18em]
    font-medium
    transition-all
    duration-500
    hover:!bg-white
    hover:!text-[#7e7b3d]
  "
>
  GET IN TOUCH 
</Button>

          </div>
        </div>
      </Container>

    </section>
  );
}
