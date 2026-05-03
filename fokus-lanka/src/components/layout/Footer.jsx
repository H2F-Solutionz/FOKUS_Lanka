import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-fokus-navy to-fokus-blue text-white pt-20 pb-8 border-t-2 border-fokus-gold/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-poppins font-bold text-white tracking-tight">
              Fokus <span className="text-fokus-gold">Lanka</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              UK-qualified civil engineering and premium residential construction support in Jaffna, Sri Lanka, committed to building safe & durable homes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold font-poppins mb-6 uppercase tracking-widest text-fokus-gold">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-400 hover:text-fokus-gold transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-fokus-gold transition-colors text-sm">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-fokus-gold transition-colors text-sm">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-fokus-gold transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-bold font-poppins mb-6 uppercase tracking-widest text-fokus-gold">Our Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services" className="text-gray-400 hover:text-fokus-gold transition-colors text-sm">Residential Construction</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-fokus-gold transition-colors text-sm">Planning Approval</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-fokus-gold transition-colors text-sm">Architectural Design</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-fokus-gold transition-colors text-sm">Renovation Work</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold font-poppins mb-6 uppercase tracking-widest text-fokus-gold">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="flex gap-3 items-start hover:text-fokus-gold transition-colors">
                <span className="text-fokus-gold mt-0.5">📍</span>
                <span className="text-xs">No 58 Maruthadi Road,<br/>Jaffna, Sri Lanka</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-fokus-gold mt-0.5">📞</span>
                <div className="flex flex-col gap-1">
                  <a href="tel:+940701080100" className="hover:text-fokus-gold transition-colors text-xs">+94 070 10 80 100</a>
                  <a href="tel:+940706070100" className="hover:text-fokus-gold transition-colors text-xs">+94 070 60 70 100</a>
                </div>
              </li>
              <li className="flex gap-3 items-center hover:text-fokus-gold transition-colors">
                <span className="text-fokus-gold">✉️</span>
                <a href="mailto:info@fokuslanka.lk" className="text-xs">info@fokuslanka.lk</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fokus Lanka. All rights reserved. | Premium Engineering & Construction Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
