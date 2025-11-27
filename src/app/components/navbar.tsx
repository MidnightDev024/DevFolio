'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NewNavbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { href: '#home', label: 'Home', isExternal: false },
    { href: '#projects', label: 'Projects', isExternal: false },
    { href: '#about', label: 'About', isExternal: false },
    { href: '#contact', label: 'Contact', isExternal: false },
    { href: '/AKASH RESUME.pdf', label: 'Resume', isExternal: true },
  ];

  return (
    <nav 
      onMouseLeave={() => setHoveredLink(null)}
      className="sticky top-4 z-50 flex justify-center"
    >
      {/* Updated container with border and new background color */}
      <div className="flex items-center gap-2 rounded-full bg-slate-900/50 p-2 backdrop-blur-md border border-white/10">
        {links.map((link) => (
          link.isExternal ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink(link.href)}
              className="relative rounded-full px-4 py-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
              {hoveredLink === link.href && (
                <motion.span
                  layoutId="navbar-pill"
                  className="absolute inset-0 z-[-1] rounded-full bg-slate-700"
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.href)}
              className="relative rounded-full px-4 py-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
              {hoveredLink === link.href && (
                <motion.span
                  layoutId="navbar-pill"
                  className="absolute inset-0 z-[-1] rounded-full bg-slate-700"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          )
        ))}
      </div>
    </nav>
  );
};

export default NewNavbar;