import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#e5e0da]">

      {/* ================= TOP SECTION ================= */}
      <div className="py-24">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between gap-16">

            {/* LEFT COLUMN */}
            <div>
              <h3 className="text-[2.8rem] font-medium text-[#2f3e2f] mb-8">
                Dr. Maya Reynolds, PsyD
              </h3>

              <p className="text-[18px] text-[#2f3e2f] leading-[1.8]">
                Santa Monica, California
                <br />
                Anxiety & Trauma Therapy for Adults
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:info@mayareynoldspsyd.com"
                  className="underline text-[#2f3e2f]"
                >
                  info@mayareynoldspsyd.com
                </a>
                <br />
                <a
                  href="tel:3100000000"
                  className="underline text-[#2f3e2f]"
                >
                  (310) 000-0000
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex gap-24 lg:gap-32">

              {/* HOURS */}
              <div className="text-right">
                <h4 className="text-[2rem] font-medium text-[#2f3e2f] mb-6">
                  Office Hours
                </h4>

                <p className="text-[18px] text-[#2f3e2f] leading-[1.8]">
                  Monday – Friday
                  <br />
                  By Appointment Only
                </p>
              </div>

              {/* NAVIGATION */}
              <div className="text-right">
                <h4 className="text-[2rem] font-medium text-[#2f3e2f] mb-6">
                  Explore
                </h4>

                <div className="space-y-3 text-[18px]">
                  <Link href="#about" className="underline block">
                    About
                  </Link>
                  <Link href="#services" className="underline block">
                    Services
                  </Link>
                  <Link href="#contact" className="underline block">
                    Contact
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </div>


      {/* ================= BOTTOM LEGAL STRIP ================= */}
      <div className="bg-[var(--color-bg-soft)] py-16 text-center">

        <div className="space-x-6 text-[15px] text-[#2f3e2f]">
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
          <Link href="#" className="underline">
            Good Faith Estimate
          </Link>
          <Link href="#" className="underline">
            Terms & Conditions
          </Link>
          <Link href="#" className="underline">
            Disclaimer
          </Link>
        </div>

        <p className="mt-10 text-[15px] text-[#2f3e2f]">
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}
