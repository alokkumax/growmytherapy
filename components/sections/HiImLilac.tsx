import Image from "next/image";
import Container from "@/components/ui/Container";

export default function HiImLilac() {
  return (
    <section  id="about" className="bg-[var(--color-bg-soft)] py-20 sm:py-24 lg:py-32">

      <div className="px-5 sm:px-8 lg:px-12 xl:px-20">
        <Container>

          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-14 lg:gap-24">

            {/* ================= CONTENT FIRST (MOBILE) ================= */}
            <div
              data-aos="fade-up"
              className="order-1 lg:order-1 max-w-[760px] text-center lg:text-left"
            >
              <h2 className="text-[2.4rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.1] font-medium text-[var(--color-text-main)] mb-6 sm:mb-8">
  Hi, I’m Dr. Maya Reynolds.
</h2>


<p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.8] text-[var(--color-text-light)] mb-8 sm:mb-10">
  I’m a licensed clinical psychologist based in Santa Monica, specializing in anxiety, trauma, and burnout. My work is grounded in evidence-based practices, including cognitive behavioral therapy and trauma-informed approaches. I provide a structured yet compassionate space where adults can explore patterns, process difficult experiences, and develop practical tools for lasting change.
</p>


              <button className="text-[13px]
                sm:text-[14px]
                px-7
                py-3
                border
                border-[var(--color-primary)]
                bg-transparent
                text-[var(--color-primary)]
                tracking-[0.15em]
                font-medium
                hover:bg-[var(--color-primary)]
                hover:text-white
                transition-all
                duration-700
                hover:cursor-pointer
                ">
              LET’S WORK TOGETHER →

              </button>
            </div>


            {/* ================= IMAGE BELOW (MOBILE) ================= */}
            {/* IMAGE SECTION */}
<div data-aos="fade-up" className="order-2 lg:order-2 w-full flex justify-center xl:justify-center mt-10 lg:mt-0">

<div
 className="
 relative
 w-[55%]
 sm:w-[35%]
 md:w-[30%]
 lg:w-[80%]
 xl:w-[75%]
 max-w-[500px]
"

>
  {/* MAIN ARCH IMAGE */}
  <div
    className="relative overflow-hidden"
    style={{
      borderTopLeftRadius: "400px",
      borderTopRightRadius: "400px",
    }}
  >
    <Image
      src="/images/therapist-hero.png"
      alt="Lilac bouquet portrait"
      width={800}
      height={1000}
      priority
      className="w-full h-auto object-cover object-top"
      unoptimized
    />
  </div>

  {/* CIRCULAR IMAGE */}
  <div data-aos="fade-up"
    className="
      absolute
      -bottom-6 sm:-bottom-10 lg:-bottom-20
      -right-4 sm:-right-8 lg:-right-24
      w-[110px] h-[110px]
      sm:w-[160px] sm:h-[160px]
      md:w-[190px] md:h-[190px]
      lg:w-[280px] lg:h-[280px]
      rounded-full
      overflow-hidden
      border-4 border-[#e5e0da]
      shadow-md
    "
  >
    <Image
      src="/images/office1.jpeg"
      alt="White flowers detail"
      fill
      sizes="(max-width:768px) 160px, 280px"
      className="object-cover"
      unoptimized
    />
  </div>

</div>
</div>

          </div>

        </Container>
      </div>
    </section>
  );
}
