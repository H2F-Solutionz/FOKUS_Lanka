import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Zap, Shield, Smartphone, Globe } from 'lucide-react';

const featuresData = [
  {
    icon: <Palette size={28} className="text-brand-orange" />,
    title: "Stunning User Interfaces",
    description: "Experience premium designs built with perfect harmony of dark themes and vibrant accents."
  },
  {
    icon: <Zap size={28} className="text-brand-orange" />,
    title: "High Performance",
    description: "Lightning-fast load times with optimized code and modern, bleeding-edge architectures."
  },
  {
    icon: <Layout size={28} className="text-brand-orange" />,
    title: "Immersive Glassmorphism",
    description: "Deep, layered interfaces using blur, translucency, and gorgeous lighting effects."
  },
  {
    icon: <Smartphone size={28} className="text-brand-orange" />,
    title: "Fully Responsive",
    description: "Flawless experiences across all devices, from massive desktop monitors to small screens."
  },
  {
    icon: <Shield size={28} className="text-brand-orange" />,
    title: "Enterprise Grade",
    description: "Secure, reliable, and built to scale alongside your most ambitious business goals."
  },
  {
    icon: <Globe size={28} className="text-brand-orange" />,
    title: "Global Reach",
    description: "Built with accessibility and internationalization best practices to capture global markets."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/90 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why Choose Our <span className="text-brand-orange">Ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            We don't just build websites; we engineer digital experiences. Utilizing state-of-the-art technologies and design paradigms to build your product.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuresData.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px -15px var(--color-brand-orange-glow)",
              }}
              className="p-8 rounded-3xl bg-brand-glass backdrop-blur-xl border border-white/10 hover:border-brand-orange/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange/10 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-orange transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
