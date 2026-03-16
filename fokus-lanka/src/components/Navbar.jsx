import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Features', 'About', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-glass backdrop-blur-xl border-b border-brand-orange/20 shadow-lg shadow-brand-blue/50 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="4KUS Construction Logo" className="h-24 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-brand-orange transition-colors relative group font-medium"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-brand-orange text-white font-semibold shadow-[0_0_15px_var(--color-brand-orange-glow)] hover:shadow-[0_0_25px_var(--color-brand-orange-glow)] border border-brand-orange/50 transition-all"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-white hover:text-brand-orange transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-brand-blue/95 backdrop-blur-2xl border-b border-brand-orange/20"
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link, idx) => (
             <a 
             key={idx} 
             href={`#${link.toLowerCase()}`}
             onClick={() => setIsMobileMenuOpen(false)}
             className="text-gray-300 hover:text-brand-orange font-medium text-lg py-2 border-b border-white/5"
           >
             {link}
           </a>
          ))}
          <button className="mt-4 px-6 py-3 rounded-full bg-brand-orange text-white font-semibold w-full shadow-[0_0_15px_var(--color-brand-orange-glow)] border border-brand-orange/50">
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
