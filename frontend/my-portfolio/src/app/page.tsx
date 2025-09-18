import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import SkillSet from "./components/skillset";
// import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SkillSet />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </>
  );
};