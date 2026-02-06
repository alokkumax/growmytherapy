import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import FulfillingLife from "@/components/sections/FulfillingLife";
import MySpecialties from "@/components/sections/MySpecialties";
import NotAlone from "@/components/sections/NotAlone";
import HiImLilac from "@/components/sections/HiImLilac";
import FAQs from "@/components/sections/FAQs";
import ProfessionalBackground from "@/components/sections/ProfessionalBackground";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import OfficeSection from "@/components/sections/OfficeSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FulfillingLife />
        <MySpecialties />
        <NotAlone />
        <OfficeSection/>

        <HiImLilac />
        <FAQs />
        <ProfessionalBackground />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
