import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PartnersHero from "../components/partners/PartnersHero";
import PartnershipTypes from "../components/partners/PartnershipTypes";
import WhyPartner from "../components/partners/WhyPartner";
import PartnerCTA from "../components/partners/PartnerCTA";
import PartnerFAQ from "../components/partners/PartnerFAQ";

export const metadata: Metadata = {
  title: "Partner With Us | TyphoonHacks 2026",
  description:
    "Support Hong Kong's premier high school hackathon. Become an event sponsor or industry partner for TyphoonHacks 2026.",
};

export default function PartnersPage() {
  return (
    <>
      <Navigation />
      <main>
        <PartnersHero />
        <PartnershipTypes />
        <WhyPartner />
        <PartnerCTA />
        <PartnerFAQ />
      </main>
      <Footer />
    </>
  );
}
