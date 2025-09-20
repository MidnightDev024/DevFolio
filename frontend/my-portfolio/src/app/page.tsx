import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import SkillSet from "./components/skillset";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      {/* <About />
      <SkillSet />
      <Contact />
      <Footer /> */}
    </>
  );
};