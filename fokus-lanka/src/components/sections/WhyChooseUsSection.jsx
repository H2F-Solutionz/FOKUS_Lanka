import { CheckCircle2 } from 'lucide-react';
import hero4 from '../../assets/hero4.png';
import { motion } from 'framer-motion';

const reasons = [
  "30+ years of high-level engineering experience.",
  "UK-qualified civil engineering background.",
  "Specialized focus on durable residential homes.",
  "Meticulous attention to planning and JMC approvals.",
  "Uncompromising devotion to strong quality standards.",
  "Dedicated local support based in Jaffna."
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-fokus-light/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-fokus-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fokus-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="text-fokus-gold font-bold text-sm tracking-widest uppercase">Why Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-fokus-navy mb-2 leading-tight">
              Excellence in <span className="bg-gradient-to-r from-fokus-gold to-fokus-orange bg-clip-text text-transparent">Every Project</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-fokus-gold to-fokus-orange mb-8 rounded-full"></div>
            
            <p className="text-base text-fokus-grey leading-relaxed mb-12 max-w-md">
              Building a home is one of the most significant investments of your life. We bring world-class engineering discipline to your doorstep, ensuring your complete peace of mind.
            </p>

            <ul className="space-y-5">
              {reasons.map((reason, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <CheckCircle2 className="text-fokus-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-fokus-navy font-medium text-sm leading-relaxed">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -8 }}
                className="rounded-2xl overflow-hidden shadow-xl border border-white/50 h-72 bg-gray-100"
              >
                <img
                  src={hero4}
                  alt="Engineering blueprint"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                whileHover={{ y: -8 }}
                className="rounded-2xl overflow-hidden shadow-xl border border-white/50 h-80 bg-gray-100 mt-8"
              >
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop" 
                  alt="Construction team" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-gradient-to-br from-fokus-navy to-fokus-blue text-white w-44 h-44 rounded-full flex flex-col items-center justify-center p-4 text-center border-4 border-white shadow-2xl"
            >
              <span className="text-5xl font-bold text-fokus-gold">30+</span>
              <span className="font-poppins text-sm uppercase tracking-wider mt-2 font-semibold">Years of<br/>Experience</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
