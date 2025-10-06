'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NewNavbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav 
      onMouseLeave={() => setHoveredLink(null)}
      className="sticky top-4 z-50 flex justify-center"
    >
      {/* Updated container with border and new background color */}
      <div className="flex items-center gap-2 rounded-full bg-slate-900/50 p-2 backdrop-blur-md border border-white/10">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHoveredLink(link.href)}
            // Text color is now white on hover
            className="relative rounded-full px-4 py-2 text-sm text-slate-300 transition-colors hover:text-white"
          >
            {link.label}
            {hoveredLink === link.href && (
              // The pill is now a darker gray for better contrast
              <motion.span
                layoutId="navbar-pill"
                className="absolute inset-0 z-[-1] rounded-full bg-slate-700"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NewNavbar;