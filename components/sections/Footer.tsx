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
                Lilac Template
              </h3>

              <p className="text-[18px] text-[#2f3e2f] leading-[1.8]">
                123 Example Road
                <br />
                Minneapolis, MN
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:email@example.com"
                  className="underline text-[#2f3e2f]"
                >
                  email@example.com
                </a>
                <br />
                <a
                  href="tel:5555555555"
                  className="underline text-[#2f3e2f]"
                >
                  (555) 555-5555
                </a>
              </div>
            </div>

            {/* RIGHT SIDE (Hours + Find grouped) */}
            <div className="flex gap-24 lg:gap-32">

              {/* HOURS */}
              <div className="text-right">
                <h4 className="text-[2rem] font-medium text-[#2f3e2f] mb-6">
                  Hours
                </h4>

                <p className="text-[18px] text-[#2f3e2f] leading-[1.8]">
                  Monday – Friday
                  <br />
                  10am – 6pm
                </p>
              </div>

              {/* FIND */}
              <div className="text-right">
                <h4 className="text-[2rem] font-medium text-[#2f3e2f] mb-6">
                  Find
                </h4>

                <div className="space-y-3 text-[18px]">
                  <Link href="#" className="underline block">
                    Home
                  </Link>
                  <Link href="#" className="underline block">
                    Contact
                  </Link>
                  <Link href="#" className="underline block">
                    Blog
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </div>


      {/* ================= BOTTOM LEGAL STRIP ================= */}
      <div className="bg-[#d9d4ce] py-16 text-center">

        <div className="space-x-6 text-[15px] text-[#2f3e2f]">
          <Link href="#" className="underline">
            Privacy & Cookies Policy
          </Link>
          <Link href="#" className="underline">
            Good Faith Estimate
          </Link>
          <Link href="#" className="underline">
            Website Terms & Conditions
          </Link>
          <Link href="#" className="underline">
            Disclaimer
          </Link>
        </div>

        <p className="mt-6 text-[15px] text-[#2f3e2f]">
          Website Template Credits:{" "}
          <span className="underline">Go Bloom Creative</span>
        </p>

        <p className="mt-10 text-[15px] text-[#2f3e2f]">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>

      </div>

    </footer>
  );
}
