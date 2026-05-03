import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect which section is in view
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <div className="relative w-32 md:w-48 flex items-center">
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, '#home')}
            className="absolute top-1/2 left-0 -translate-y-1/2 z-50"
          >
            <img
              src={logo}
              alt="Fokus Lanka"
              className={`h-20 md:h-32 w-auto transition-all duration-300 drop-shadow-xl ${!isScrolled && 'brightness-0 invert'}`}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium text-sm tracking-wide transition-all duration-300 relative group cursor-pointer ${isScrolled
                  ? isActive ? 'text-fokus-gold' : 'text-fokus-navy hover:text-fokus-gold'
                  : isActive ? 'text-fokus-gold' : 'text-white/90 hover:text-fokus-gold'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-fokus-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-gradient-to-r from-fokus-gold to-fokus-orange hover:shadow-lg transition-all duration-300 text-white px-8 py-3 rounded-lg font-semibold text-sm tracking-wider shadow-md transform hover:scale-105 cursor-pointer"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-fokus-navy' : 'text-white'
            }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-6 px-6 flex flex-col gap-6">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium text-lg border-b border-gray-100 pb-2 cursor-pointer transition-colors ${isActive
                  ? 'text-fokus-gold font-bold'
                  : 'text-fokus-navy hover:text-fokus-gold'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-gradient-to-r from-fokus-gold to-fokus-orange text-white text-center py-3 rounded-md font-semibold mt-2 cursor-pointer hover:shadow-lg transition-all"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

