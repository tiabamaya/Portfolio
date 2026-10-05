import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <About />
        </Reveal>

        <Contact />
      </main>

      <Footer />
    </>
  );
}