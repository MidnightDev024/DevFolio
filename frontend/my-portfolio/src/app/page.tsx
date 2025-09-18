import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
};