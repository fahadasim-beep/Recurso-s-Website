import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Collaborators from "@/components/Collaborators"
import TechBubbles from "@/components/TechBubbles"
import SecondHero from "@/components/SecondHero"
import ServicesGrid from "@/components/ServicesGrid"
import AboutSection from "@/components/AboutSection"
import Footer from "@/components/Footer"
import Approach from "@/components/Approach"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="w-full">
        <div className="bg-black">
          <Hero />
        </div>
        <div className="bg-[oklch(0.55_0.18_255)]/10">
          <Collaborators />
        </div>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <TechBubbles />
          </div>
        </div>
        <div className="bg-[oklch(0.55_0.18_255)]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Approach />
          </div>
        </div>
        <div className="bg-white">
          <ServicesGrid />
        </div>
        <div className="bg-[oklch(0.55_0.18_255)]/10">
          <AboutSection />
        </div>
        <div className="bg-white">
          <Testimonials />
        </div>
      </main>
      <div className="bg-[oklch(0.55_0.18_255)]/10">
        <Footer />
      </div>
    </div>
  );
}
