import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import GuideFacts from "@/components/GuideFacts";
import WhatsInside from "@/components/WhatsInside";
import DailyRitual from "@/components/DailyRitual";
import WhoItsFor from "@/components/WhoItsFor";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Pain />
      <GuideFacts />
      <WhatsInside />
      <DailyRitual />
      <WhoItsFor />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
