import Nav from "@/components/Nav";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ResearchInterests from "@/components/ResearchInterests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <About />
        <Projects />
        <Skills />
        <ResearchInterests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
