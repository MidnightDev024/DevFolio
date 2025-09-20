// import Link from "next/link";
// import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';

// const Hero = () => {
//     return (
//         <section id="hero" className="min-h-screen flex items-center container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
//         {/* Left Column (Text Content) */}
//         <div className="md:w-1/2 text-center md:text-left">
//             <span className="text-yellow-400 font-semibold">Hey, I'm Akash Chawla</span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">
//             I craft digital experiences.
//             </h1>
//             <p className="text-lg text-slate-300 mb-8">
//             I'm a full-stack developer passionate about building modern, responsive, and user-friendly web applications.
//             </p>

//             <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
//             <Link href="https://github.com" target="_blank" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">
//                 <FaGithub size={28} />
//             </Link>
//             <Link href="https://linkedin.com" target="_blank" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">
//                 <FaLinkedin size={28} />
//             </Link>
//             <Link href="https://twitter.com" target="_blank" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">
//                 <FaTwitter size={28} />
//             </Link>
//             </div>

//             <a
//             href="/your-cv.pdf" // Add your CV to the `public` folder
//             download
//             className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300 inline-block"
//             >
//             Download CV
//             </a>
//         </div>
        
//         {/* Right Column (Animation Placeholder) */}
//         <div className="md:w-1/2 mt-8 md:mt-0">
//           {/* We will add the animated text and plane here later */}
//             <div className="bg-slate-800 rounded-lg p-8 h-80 flex items-center justify-center">
//             <p className="text-slate-400">Animation Area</p>
//             </div>
//         </div>

//         </div>
//         </section>
//     );
// };

// export default Hero;

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NewHero = () => {
  return (
    <section id="home" className="min-h-screen grid-background flex items-center justify-center relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Animate the content container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Avatar */}
          <div className="mb-4 inline-block">
            <Image
              src="/pixel_my_avatar.PNG" // Your avatar from the public folder
              alt="Akash Chawla's Avatar"
              width={100}
              height={100}
              className="rounded-full border-2 border-slate-600"
            />
          </div>

          {/* Available Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/50 bg-slate-800 px-3 py-1 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-sm text-teal-300">Available for new Projects</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Building Exceptional <br /> User Experiences
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-8">
            I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4">
            <Link
              href="#projects"
              className="bg-slate-800 text-white font-semibold py-3 px-6 rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              Explore My Work
            </Link>
            <Link
              href="#contact"
              className="bg-teal-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Let's Connect
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewHero;