import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus({ loading: false, error: null, success: true });
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      } else {
        setStatus({ loading: false, error: 'Failed to send message. Please try again later.', success: false });
      }
    } catch (error) {
      setStatus({ loading: false, error: 'Network error. Make sure the backend server is running.', success: false });
    }
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-fokus-navy via-fokus-navy to-fokus-blue text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-fokus-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-fokus-gold font-bold text-sm tracking-widest uppercase">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2 mb-2 leading-tight\">
              Get In <span className="bg-gradient-to-r from-fokus-gold to-fokus-orange bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-fokus-gold to-fokus-orange mb-8 rounded-full"></div>
            <p className="text-gray-300 mb-12 text-sm max-w-md">
              Ready to build your dream home? Contact us today for a consultation or quote.
            </p>

            <div className="mt-12 space-y-8">
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-white/10 group-hover:bg-fokus-gold/20 rounded-full flex items-center justify-center shrink-0 transition-all">
                  <Phone className="text-fokus-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-poppins mb-1">Phone</h4>
                  <p className="text-gray-400 mb-2 text-sm">Call us for immediate support</p>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+940701080100" className="text-fokus-gold hover:text-fokus-orange transition-colors font-semibold text-sm">
                      +94 070 10 80 100
                    </a>
                    <a href="tel:+940706070100" className="text-fokus-gold hover:text-fokus-orange transition-colors font-semibold text-sm">
                      +94 070 60 70 100
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-white/10 group-hover:bg-fokus-gold/20 rounded-full flex items-center justify-center shrink-0 transition-all">
                  <Mail className="text-fokus-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-poppins mb-1">Email</h4>
                  <p className="text-gray-400 mb-2 text-sm">Send us your structural plans or queries</p>
                  <a href="mailto:info@fokuslanka.lk" className="text-fokus-gold hover:text-fokus-orange transition-colors font-semibold text-sm">
                    info@fokuslanka.lk
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-white/10 group-hover:bg-fokus-gold/20 rounded-full flex items-center justify-center shrink-0 transition-all">
                  <MapPin className="text-fokus-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-poppins mb-1">Location</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    No 58 Maruthadi Road, <br />
                    Jaffna, <br />
                    Northern Province, Sri Lanka
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Embedded Map - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <div className="relative group">
                {/* Animated Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-fokus-gold to-fokus-orange rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                
                {/* Map Container */}
                <div className="relative h-72 rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm bg-white/5\">
                  {/* Animated corner elements */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-fokus-gold rounded-tl-lg pointer-events-none z-10 opacity-60"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-fokus-orange rounded-br-lg pointer-events-none z-10 opacity-60"></div>
                  
                  <iframe 
                    src="https://maps.google.com/maps?q=No%2058%20Maruthadi%20Road,%20Jaffna,%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                    className="rounded-3xl"
                  ></iframe>
                  
                  {/* Floating map indicator badge */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-white/20"
                  >
                    <p className="text-fokus-navy text-xs font-bold tracking-widest">📍 Jaffna</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl relative text-white border border-white/10"
          >
            {/* Form Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fokus-gold to-fokus-orange rounded-t-3xl"></div>
            
            <h3 className="text-3xl font-bold font-poppins mb-2">Send a Message</h3>
            <p className="text-gray-300 mb-8 text-sm">We'll respond within 24 hours</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {status.success && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 text-green-300 p-4 rounded-lg border border-green-500/30 text-sm"
                >
                  ✓ Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
              {status.error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 text-red-300 p-4 rounded-lg border border-red-500/30 text-sm"
                >
                  {status.error}
                </motion.div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/30 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/30 outline-none transition-all"
                    placeholder="+94 77 XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/30 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service Needed</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/30 outline-none transition-all"
                >
                  <option value="" className="bg-fokus-navy">Select a service...</option>
                  <option value="residential" className="bg-fokus-navy">Residential Construction</option>
                  <option value="planning" className="bg-fokus-navy">Planning Approval</option>
                  <option value="design" className="bg-fokus-navy">Architectural Design</option>
                  <option value="renovation" className="bg-fokus-navy">Renovation Work</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/30 outline-none transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status.loading}
                className="w-full bg-gradient-to-r from-fokus-gold to-fokus-orange hover:shadow-lg text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg disabled:opacity-70 transform hover:scale-105 mt-6"
              >
                {status.loading ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
