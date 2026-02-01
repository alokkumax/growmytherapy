import Container from "@/components/ui/Container";

export default function ProfessionalBackground() {
  return (
    <section className="bg-[var(--color-bg-main)] py-20 lg:py-28">
      <Container>
        <h2 className="text-center text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-medium text-[#3d4a3d] mb-16">
          My Professional Background
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="border border-[#d4c5e0]/60 rounded-lg p-4 flex items-center gap-3 bg-white/50">
            <span className="text-2xl">📄</span>
            <span className="text-[#5a6b5a]">Resume</span>
          </div>
          <div className="border border-[#d4c5e0]/60 rounded-lg p-4 flex items-center gap-3 bg-white/50">
            <span className="text-2xl">💼</span>
            <span className="text-[#5a6b5a]">Work History</span>
          </div>
          <div className="border border-[#d4c5e0]/60 rounded-lg p-4 flex items-center gap-3 bg-white/50">
            <span className="text-2xl">🏆</span>
            <span className="text-[#5a6b5a]">Certifications</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
