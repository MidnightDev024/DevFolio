import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/Projects";
import Ticker from "./components/tiker";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Ticker />
      <About />
      <Contact />
      <Footer />
    </>
  );
};