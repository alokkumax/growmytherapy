import Container from "@/components/ui/Container";
import Button2 from "@/components/ui/Button2";

export default function FinalCTA() {
  return (
    <section className="bg-[#3d4a3d] py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-medium text-white mb-6">
            Get started today
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-10">
            Ready to cultivate a life of purpose, joy, and inner peace?
          </p>
          <Button2 href="#book" variant="light">
            BOOK A FREE CONSULTATION
          </Button2>
        </div>
      </Container>
    </section>
  );
}
