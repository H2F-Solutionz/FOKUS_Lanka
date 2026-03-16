import React from 'react';
import { Rocket, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#040812] pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-brand-orange/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter mb-6 leading-none">
              <span className="text-brand-orange text-4xl">4</span>
              <div className="flex flex-col">
                <span className="text-white text-xl tracking-widest leading-none">KUS</span>
                <span className="text-brand-orange/80 text-[8px] uppercase tracking-wider mt-0.5">Architectural & Design</span>
              </div>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              No.58, Maruthady Road,<br />
              Jaffna, Sri Lanka.<br /><br />
              Canary Wharf,<br />
              London.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white hover:shadow-[0_0_15px_var(--color-brand-orange-glow)] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex items-center gap-2">
                <span className="text-brand-orange">📞</span> +94 070 10 80 100
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-orange">📞</span> +94 070 60 70 100
              </li>
              <li className="mt-6 pt-4 border-t border-white/10">
                <span className="block text-white font-medium">N.K. Kumarasooriyar</span>
                <span className="text-sm text-brand-orange/80">Senior Consultant / CEO</span>
                <span className="block text-xs mt-1 text-gray-500">B.Eng. (Hons.) London</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 font-light mb-4">Stay updated with our latest trends and offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-brand-glass backdrop-blur-md border border-white/10 rounded-l-lg px-4 py-3 focus:outline-none focus:border-brand-orange text-white w-full"
              />
              <button 
                type="submit" 
                className="bg-brand-orange text-white px-4 py-3 rounded-r-lg font-semibold hover:bg-orange-500 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Focus Civil Engineers (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
