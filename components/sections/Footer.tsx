import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-main)] py-16 lg:py-20">
      <Container>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Column 1: Logo & Contact */}
          <div>
            <h3 className="text-2xl font-medium text-[#3d4a3d] mb-4">
              Lilac Template
            </h3>
            <p className="text-[#5a6b5a]/90 mb-2">123 Anywhere St.</p>
            <p className="text-[#5a6b5a]/90 mb-2">hello@lilac.com</p>
            <p className="text-[#5a6b5a]/90">123-456-7890</p>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h3 className="text-lg font-medium text-[#3d4a3d] mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="#privacy"
                className="text-[#5a6b5a]/90 hover:opacity-70 transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="text-[#5a6b5a]/90 hover:opacity-70 transition"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Column 3: Find / Social */}
          <div>
            <h3 className="text-lg font-medium text-[#3d4a3d] mb-4">Find</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="#instagram"
                className="text-[#5a6b5a]/90 hover:opacity-70 transition"
              >
                Instagram
              </Link>
              <Link
                href="#facebook"
                className="text-[#5a6b5a]/90 hover:opacity-70 transition"
              >
                Facebook
              </Link>
              <Link
                href="#pinterest"
                className="text-[#5a6b5a]/90 hover:opacity-70 transition"
              >
                Pinterest
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-[#5a6b5a]/70 text-sm">
          ©2023 Lilac Template. Powered by Squarespace.
        </p>
      </Container>
    </footer>
  );
}
