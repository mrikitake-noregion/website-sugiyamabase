import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { PhilosophySection } from "./components/philosophy-section";
import { FacilitiesSection } from "./components/facilities-section";
import { EventsSection } from "./components/events-section";
import { WorksSection } from "./components/works-section";
import { InstagramSection } from "./components/instagram-section";
import { FooterSection } from "./components/footer-section";

export default function App() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <FacilitiesSection />
        <EventsSection />
        <WorksSection />
        <InstagramSection />
      </main>
      <FooterSection />
    </div>
  );
}