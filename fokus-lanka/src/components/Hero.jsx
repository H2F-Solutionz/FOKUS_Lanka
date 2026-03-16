import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue/80 rounded-full blur-[150px] pointer-events-none opacity-50" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-glass border border-brand-orange/30 backdrop-blur-md mb-8"
        >
          <Sparkles size={16} className="text-brand-orange" />
          <span className="text-sm font-medium text-brand-orange tracking-wide uppercase">Architectural & Design</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          FOCUS CIVIL <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-orange to-brand-orange-glow">
            ENGINEERS (PVT) LTD
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-light"
        >
          Led by N.K. Kumarasooriyar (Senior Consultant / CEO). We provide premium architectural and civil engineering solutions across Sri Lanka and London.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-lg shadow-[0_0_20px_var(--color-brand-orange-glow)] hover:shadow-[0_0_35px_var(--color-brand-orange-glow)] border border-brand-orange/50 transition-all flex items-center justify-center gap-2"
          >
            Start Project <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-brand-glass border border-white/10 backdrop-blur-md text-white font-bold text-lg hover:border-brand-orange/50 hover:bg-white/5 transition-all"
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute hidden md:block w-32 h-32 rounded-2xl bg-brand-glass backdrop-blur-xl border border-white/10 -right-4 top-1/4 shadow-2xl rotate-12"
      />
      
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute hidden md:block w-24 h-24 rounded-full bg-brand-orange/10 backdrop-blur-3xl border border-brand-orange/20 left-10 bottom-1/4 shadow-[0_0_30px_var(--color-brand-orange-glow)]"
      />
    </section>
  );
};

export default Hero;
