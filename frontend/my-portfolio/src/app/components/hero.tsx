import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24t md:py-32">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Column (Text Content) */}
        <div className="md:w-1/2 text-center md:text-left">
            <span className="text-yellow-400 font-semibold">Hey, I'm Your Name</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">
            I craft digital experiences.
            </h1>
            <p className="text-lg text-slate-300 mb-8">
            I'm a full-stack developer passionate about building modern, responsive, and user-friendly web applications.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
            <Link href="https://github.com" target="_blank" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">
                <FaGithub size={28} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">
                <FaLinkedin size={28} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">
                <FaTwitter size={28} />
            </Link>
            </div>

            <a
            href="/your-cv.pdf" // Add your CV to the `public` folder
            download
            className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300 inline-block"
            >
            Download CV
            </a>
        </div>
        
        {/* Right Column (Animation Placeholder) */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          {/* We will add the animated text and plane here later */}
            <div className="bg-slate-800 rounded-lg p-8 h-80 flex items-center justify-center">
            <p className="text-slate-400">Animation Area</p>
            </div>
        </div>

        </div>
        </section>
    );
};

export default Hero;