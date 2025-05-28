import Stats from "@/sections/stats";
import Hero from "@/sections/hero";
import Trust from "@/sections/trust";
import Services from "@/sections/services";
import Projects from "@/sections/projects";
import FAQ from "@/sections/faq";
import Testimonials from "@/sections/testimonials";
import CallToAction from "@/sections/call-to-action";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Trust />
      <Stats />
      <Services />
      {/* <Projects /> */}
      <Testimonials />
      <FAQ />
      <CallToAction />
      <ScrollProgress />
    </main>
  );
}
