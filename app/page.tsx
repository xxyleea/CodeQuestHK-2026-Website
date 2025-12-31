import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import EventOverview from "./components/home/EventOverview";
import ThemeSection from "./components/home/ThemeSection";
import TimelineSection from "./components/home/TimelineSection";
import ComparisonSection from "./components/home/ComparisonSection";
import PrizesSection from "./components/home/PrizesSection";
import FAQSection from "./components/home/FAQSection";
import SponsorsPreview from "./components/home/SponsorsPreview";
import FinalCTA from "./components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <EventOverview />
        <ThemeSection />
        <TimelineSection />
        <ComparisonSection />
        <PrizesSection />
        <SponsorsPreview />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
