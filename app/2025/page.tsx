import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ShowcaseHero from "../components/showcase/ShowcaseHero";
import EventRecap from "../components/showcase/EventRecap";
import WinningProjects from "../components/showcase/WinningProjects";
import Testimonials from "../components/showcase/Testimonials";
import LessonsLearned from "../components/showcase/LessonsLearned";
import BridgeTo2026 from "../components/showcase/BridgeTo2026";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "CodeQuestHK 2025 | TyphoonHacks",
  description:
    "Look back at our 2025 Game Jam - CodeQuestHK, where the TyphoonHacks organizing team started. See what happened and the winning projects.",
};

export default function ShowcaseRedirect() {
  // 2025 page is not ready yet.
  redirect("/#overview");
}

export function ShowcasePage() {
  return (
    <>
      <Navigation />
      <main>
        <ShowcaseHero />
        <EventRecap />
        <WinningProjects />
        <Testimonials />
        <LessonsLearned />
        <BridgeTo2026 />
      </main>
      <Footer />
    </>
  );
}
