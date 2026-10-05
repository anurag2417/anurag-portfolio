import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Contact from "@/components/sections/Contact";
import Intro from "@/components/sections/Intro";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Preloader from "@/components/layout/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <SelectedWork />
        <Capabilities />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}