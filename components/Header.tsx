"use client";

import { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolio';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
            {personalInfo.name}
          </a>
          <ul className="flex gap-4 md:gap-8 text-sm md:text-base">
            <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
