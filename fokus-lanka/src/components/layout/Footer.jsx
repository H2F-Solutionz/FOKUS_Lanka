import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight, Github } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-fokus-navy text-white pt-24 pb-12 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fokus-gold/50 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-fokus-gold/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-fokus-orange/5 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

          {/* Brand & Mission */}
          <div className="relative">
            <Link to="/" className="inline-block group mb-2">
              <img
                src={logo}
                alt="Fokus Lanka"
                className="h-28 md:h-40 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-all drop-shadow-lg"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs -mt-2 md:-mt-4 relative z-10">
              Bringing UK-qualified engineering precision and premium residential construction standards to the heart of Jaffna, Sri Lanka. Building homes that last for generations.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-fokus-gold hover:border-fokus-gold/50 transition-all backdrop-blur-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-bold font-poppins mb-8 flex items-center gap-2 uppercase tracking-widest text-xs">
              <span className="w-6 h-px bg-fokus-gold"></span>
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Projects', path: '/projects' },
                { name: 'Services', path: '/services' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-fokus-gold transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-fokus-gold/0 group-hover:bg-fokus-gold transition-all scale-0 group-hover:scale-100"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="text-white font-bold font-poppins mb-8 flex items-center gap-2 uppercase tracking-widest text-xs">
              <span className="w-6 h-px bg-fokus-gold"></span>
              Reach Us
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-fokus-gold shrink-0 group-hover:bg-fokus-gold/10 transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white mb-1 uppercase tracking-wider">Our Office</p>
                  <p className="text-gray-400 text-xs leading-relaxed">No 58 Maruthadi Road,<br />Jaffna, Sri Lanka</p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-fokus-gold shrink-0 group-hover:bg-fokus-gold/10 transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white mb-1 uppercase tracking-wider">Call Us</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+94701080100" className="text-gray-400 hover:text-fokus-gold transition-colors text-xs font-medium">+94 701 080 100</a>
                    <a href="tel:+94706070100" className="text-gray-400 hover:text-fokus-gold transition-colors text-xs font-medium">+94 706 070 100</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-white font-bold font-poppins mb-8 flex items-center gap-2 uppercase tracking-widest text-xs">
              <span className="w-6 h-px bg-fokus-gold"></span>
              Updates
            </h4>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-fokus-gold/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <p className="text-gray-300 text-xs mb-4 leading-relaxed font-medium">
                Subscribe to our newsletter for construction tips and project updates.
              </p>
              <form className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-fokus-gold/50 focus:ring-0 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 w-8 h-8 bg-gradient-to-r from-fokus-gold to-fokus-orange rounded-lg flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Licensed Engineering Firm
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">
            &copy; {currentYear} Fokus Lanka (PVT) LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-[10px] font-bold text-gray-500 hover:text-fokus-gold transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link to="/terms" className="text-[10px] font-bold text-gray-500 hover:text-fokus-gold transition-colors uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
