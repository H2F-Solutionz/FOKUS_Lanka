import SectionHeading from '../ui/SectionHeading';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-fokus-navy text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
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
                  <a href="tel:+94773155125" className="text-fokus-orange hover:text-white transition-colors text-lg font-semibold tracking-wide">
                    +94 77 315 5125
                  </a>
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
                    123 Engineering Avenue, <br />
                    Jaffna, <br />
                    Northern Province, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-gray-200 rounded-xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1596541223130-5d56447cefe5?q=80&w=800&auto=format&fit=crop" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="bg-white text-fokus-navy px-4 py-2 rounded-md font-semibold text-sm shadow-lg flex items-center gap-2">
                  <MapPin size={16} /> Location Map
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl relative text-fokus-navy">
            {/* Form Accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-fokus-gold to-fokus-orange rounded-t-2xl"></div>
            
            <h3 className="text-2xl font-bold font-poppins mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/20 outline-none transition-all"
                    placeholder="+94 77 XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                <select 
                  id="service" 
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
                  className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:border-fokus-gold focus:ring-2 focus:ring-fokus-gold/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-fokus-navy hover:bg-fokus-blue text-white py-4 rounded-md font-semibold text-lg flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                SendMessage <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
