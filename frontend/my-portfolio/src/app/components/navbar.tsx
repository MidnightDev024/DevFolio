'use client'; // This is a client component because it uses state (for the mobile menu)

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  // State to manage whether the mobile menu is open or not
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
};

    return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
            
          {/* Logo / Your Name */}
            <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
                Mid Night Dev
            </Link>
            </div>

          {/* Desktop Navigation Links */}
            <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#about" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
                </Link>
                <Link href="/qualification" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Qualification
                </Link>
                <Link href="/skills" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Skill Set
                </Link>
                <Link href="/projects" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projects
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
                </Link>
                <a href="mailto:your-email@example.com" className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300 ml-4">
                Hire Me
                </a>
            </div>
            </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
            <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            </div>

        </div>
        </div>

      {/* Mobile Menu Panel */}
        {isOpen && (
        <div className="md:hidden bg-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link href="#about" onClick={toggleMenu} className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                About
            </Link>
            <Link href="#experience" onClick={toggleMenu} className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Experience
            </Link>
            <Link href="#projects" onClick={toggleMenu} className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Projects
            </Link>
            <Link href="#contact" onClick={toggleMenu} className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
            </Link>
            <a href="mailto:your-email@example.com" className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300 mt-4">
                Hire Me
            </a>
            </div>
        </div>
        )}
    </nav>
    );
};

export default Navbar;