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
    <section id="contact" className="py-20 bg-fokus-navy text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading 
              title="Get in Touch" 
              subtitle="Ready to build your dream home? Contact us today for a consultation or quote."
              light={true}
            />

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-fokus-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-poppins mb-1">Phone</h4>
                  <p className="text-gray-300 mb-1">Call us for immediate support</p>
                  <div className="flex flex-col">
                    <a href="tel:+940701080100" className="text-fokus-orange hover:text-white transition-colors text-lg font-semibold tracking-wide">
                      +94 070 10 80 100
                    </a>
                    <a href="tel:+940706070100" className="text-fokus-orange hover:text-white transition-colors text-lg font-semibold tracking-wide">
                      +94 070 60 70 100
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-fokus-orange" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-poppins mb-1">Email</h4>
                  <p className="text-gray-300 mb-1">Send us your structural plans or queries</p>
                  <a href="mailto:info@fokuslanka.lk" className="text-fokus-gold hover:text-white transition-colors text-lg font-medium">
                    info@fokuslanka.lk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-fokus-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-poppins mb-1">Location</h4>
                  <p className="text-gray-300 leading-relaxed max-w-sm">
                    No 58 Maruthadi Road, <br />
                    Jaffna, <br />
                    Northern Province, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-12 h-64 bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
              <iframe 
                src="https://maps.google.com/maps?q=No%2058%20Maruthadi%20Road,%20Jaffna,%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-2xl relative text-fokus-navy"
          >
            {/* Form Accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-fokus-gold to-fokus-orange rounded-t-2xl"></div>
            
            <h3 className="text-2xl font-bold font-poppins mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.success && (
                <div className="bg-green-50 text-green-800 p-4 rounded-md mb-4 border border-green-200">
                  Message sent successfully! We will get back to you soon.
                </div>
              )}
              {status.error && (
                <div className="bg-red-50 text-red-800 p-4 rounded-md mb-4 border border-red-200">
                  {status.error}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/20 outline-none transition-all"
                    placeholder="+94 77 XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/20 outline-none transition-all text-fokus-navy"
                >
                  <option value="">Select a service...</option>
                  <option value="residential">Residential Construction</option>
                  <option value="planning">Planning Approval</option>
                  <option value="design">Architectural Design</option>
                  <option value="renovation">Renovation Work</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status.loading}
                className="w-full bg-fokus-navy hover:bg-fokus-blue text-white py-4 rounded-md font-semibold text-lg flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
              >
                {status.loading ? 'Sending...' : (
                  <>Send Message <Send size={20} /></>
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
