import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-fokus-navy text-white pt-16 pb-8 border-t-4 border-fokus-gold">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-poppins font-bold text-white tracking-tight">
              Fokus Lanka
            </span>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              UK-qualified civil engineering and premium residential construction support in Jaffna, Sri Lanka, committed to building safe & durable homes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-300 hover:text-fokus-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-fokus-gold transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-fokus-gold transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-fokus-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6 border-b border-white/10 pb-2 inline-block">Our Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services" className="text-gray-300 hover:text-fokus-gold transition-colors">Residential Construction</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-fokus-gold transition-colors">Planning Approval</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-fokus-gold transition-colors">Architectural Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-fokus-gold transition-colors">Renovation Work</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6 border-b border-white/10 pb-2 inline-block">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li className="flex gap-3 items-start">
                <span className="text-fokus-gold mt-1">📍</span>
                <span>No 58 Maruthadi Road,<br/>Jaffna, Sri Lanka</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-fokus-gold mt-1">📞</span>
                <div className="flex flex-col">
                  <a href="tel:+940701080100" className="hover:text-white transition-colors">+94 070 10 80 100</a>
                  <a href="tel:+940706070100" className="hover:text-white transition-colors">+94 070 60 70 100</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-fokus-gold">✉️</span>
                <a href="mailto:info@fokuslanka.lk" className="hover:text-white transition-colors">info@fokuslanka.lk</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fokus Lanka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
