import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, ShieldCheck, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050812] font-montserrat">
      
      {/* Clean, Subtle Background Lighting (Static) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Clean Typography */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Elegant Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
             <div className="w-2 h-2 rounded-full bg-brand-orange" />
             <span className="text-white text-xs font-bold tracking-widest uppercase">
               About Us
             </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-8 text-white leading-tight">
            Top Quality Homes. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">
              UK Standards.
            </span>
          </h2>
          
          <div className="space-y-6 text-gray-300 font-light text-xl leading-relaxed">
            <p>
              We are a trusted company from the <strong className="text-white font-medium">UK</strong>. We have over 30 years of experience building strong and beautiful homes. We know how to build the best.
            </p>

            <p>
              Now, we are building homes in <strong className="text-brand-orange font-medium">Jaffna</strong>. We follow very strict <strong className="text-white font-medium">UK safety and quality rules</strong>. This means your house will be safe, look great, and last a very long time.
            </p>
          </div>

          {/* Clean Experience Badge */}
          <div className="mt-10 inline-flex items-center gap-6 bg-white/5 border border-white/10 px-8 py-6 rounded-2xl backdrop-blur-xl">
             <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/10 text-brand-orange">
               <Award size={32} />
             </div>
             <div className="flex flex-col">
               <span className="text-4xl font-bold text-white mb-1">30+</span>
               <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">Years of Experience</span>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Sleek Data Cards */}
        <motion.div 
          className="lg:w-1/2 grid grid-cols-1 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {/* Card 1 */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.01] backdrop-blur-xl border border-white/10 hover:border-brand-orange/40 transition-all duration-300 flex items-start gap-6 group"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange/10 transition-colors">
              <MapPin size={26} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">From The UK</h3>
              <p className="text-gray-400 text-base font-light leading-relaxed">
                We started in the UK. We bring all our top building skills and knowledge to every project here.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
             whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.01] backdrop-blur-xl border border-white/10 hover:border-brand-orange/40 transition-all duration-300 flex items-start gap-6 group"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange/10 transition-colors">
              <Home size={26} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Now In Jaffna</h3>
              <p className="text-gray-400 text-base font-light leading-relaxed">
                We are building brand new, top-quality houses right here in Jaffna for your family.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
             whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.01] backdrop-blur-xl border border-white/10 hover:border-brand-orange/40 transition-all duration-300 flex items-start gap-6 group"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange/10 transition-colors">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">UK Safety & Rules</h3>
              <p className="text-gray-400 text-base font-light leading-relaxed">
                We follow strict UK building rules. This means your house will be strong and very safe to live in.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
