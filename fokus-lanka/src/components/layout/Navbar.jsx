import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Always consider Navbar scrolled if not on Home page for better visibility
    if (location.pathname !== '/') {
      setIsScrolled(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className={`text-2xl font-poppins font-bold tracking-tight transition-colors ${isScrolled || location.pathname !== '/' ? 'text-fokus-navy' : 'text-white'
            }`}
          >
            Fokus Lanka
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium transition-colors hover:text-fokus-gold ${isScrolled || location.pathname !== '/' ? 'text-fokus-navy' : 'text-white/90'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-fokus-gold hover:bg-fokus-orange transition-colors text-white px-6 py-2 rounded-md font-semibold font-poppins shadow-sm"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${isScrolled || location.pathname !== '/' ? 'text-fokus-navy' : 'text-white'
            }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-fokus-navy font-medium text-lg border-b border-gray-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-fokus-navy text-white text-center py-3 rounded-md font-semibold mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

