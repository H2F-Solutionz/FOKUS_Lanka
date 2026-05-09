import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPinned, Send, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050812] font-montserrat">
      
      {/* Clean Background Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          className="lg:w-1/3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
             <div className="w-2 h-2 rounded-full bg-brand-orange" />
             <span className="text-white text-xs font-bold tracking-widest uppercase">
               Contact Us
             </span>
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-white leading-tight">
            4KUS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500 text-3xl">
              Architectural & Design
            </span>
          </h2>

          <div className="space-y-6 mt-10">
            {/* Phone */}
            <div className="flex items-start gap-4 group">
               <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange/10 transition-colors shrink-0 mt-1">
                 <Phone size={20} />
               </div>
               <div>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-2">Contact</p>
                <p className="text-white font-medium text-lg mb-1">+94 76 668 4532</p>
                <p className="text-white font-medium text-lg">+94 76 668 4532</p>
               </div>
            </div>

            {/* Offices */}
            <div className="flex items-start gap-4 group">
               <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange/10 transition-colors shrink-0 mt-1">
                 <MapPinned size={20} />
               </div>
               <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1">Sri Lanka HQ</p>
                    <p className="text-white font-medium leading-relaxed">No.58, Maruthady Road,<br/>Jaffna, Sri Lanka.</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1">UK Office</p>
                    <p className="text-white font-medium leading-relaxed">Canary Wharf,<br/>London.</p>
                  </div>
               </div>
            </div>

            {/* CEO Profile */}
            <div className="flex items-start gap-4 group bg-white/5 p-5 rounded-2xl border border-white/10 mt-8 backdrop-blur-md hover:border-brand-orange/30 transition-all">
               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange/20 to-transparent border border-brand-orange/30 flex items-center justify-center text-brand-orange shrink-0">
                 <User size={20} />
               </div>
               <div>
                  <h4 className="text-white font-bold text-lg mb-1">N.K. Kumarasooriyar</h4>
                  <p className="text-brand-orange text-sm font-semibold tracking-wide uppercase mb-1">Senior Consultant / CEO</p>
                  <p className="text-gray-400 text-xs font-medium tracking-wide">B.Eng. (Hons.) London</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          className="lg:w-2/3 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
             hidden: { opacity: 0, y: 30 },
             visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
          }}
        >
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.01] backdrop-blur-xl border border-white/10 shadow-2xl h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-gray-400 text-sm font-medium ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all font-light"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-gray-400 text-sm font-medium ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all font-light"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-gray-400 text-sm font-medium ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can we help?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all font-light"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-400 text-sm font-medium ml-1">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  placeholder="Tell us about your next project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all resize-none font-light"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-brand-orange text-white py-4 rounded-xl font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:bg-orange-600 transition-colors mt-4"
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
