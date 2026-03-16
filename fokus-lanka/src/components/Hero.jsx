import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import introVideo from '../assets/intro.mp4';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity pointer-events-none"
      >
        <source src={introVideo} type="video/mp4" />
      </video>
      
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue/80 rounded-full blur-[150px] pointer-events-none opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-10">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-montserrat font-normal text-3xl md:text-5xl lg:text-7xl tracking-widest uppercase mb-6 leading-tight text-white drop-shadow-2xl flex flex-wrap justify-center items-center gap-x-4 cursor-default"
        >
          <div>
            {"Focus Civil".split('').map((char, i) => (
              <span
                key={`fc-${i}`}
                className={`inline-block transition-all duration-200 hover:-translate-y-2 hover:scale-125 hover:z-10 relative
                  ${i === 0 || i === 6
                    ? 'text-brand-orange text-[1.3em] drop-shadow-[0_0_20px_rgba(255,107,53,0.7)] hover:text-white hover:drop-shadow-[0_0_30px_rgba(255,255,255,1)]'
                    : 'hover:text-brand-orange hover:drop-shadow-[0_0_25px_rgba(255,107,53,1)]'
                  }`}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
          <div className="flex items-baseline gap-x-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5
                  }
                }
              }}
              className="font-bold flex"
            >
              {"Engineers".split('').map((char, i) => (
                <motion.span 
                  key={`eng-${i}`} 
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                  className="inline-block text-brand-orange transition-all duration-200 hover:text-white hover:-translate-y-2 hover:scale-125 hover:drop-shadow-[0_0_30px_rgba(255,255,255,1)] hover:z-10 relative"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <span className="text-sm lg:text-lg text-white/50 font-medium tracking-[0.2em] whitespace-nowrap">
              {"(PVT) LTD".split('').map((char, i) => (
                <span key={`pvt-${i}`} className="inline-block transition-all duration-200 hover:text-white hover:-translate-y-2 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(255,255,255,1)] hover:z-10 relative">
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </div>
        </motion.h1>

        {/* 30 Years Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-orange" />
          <p style={{ fontFamily: "'Great Vibes', cursive" }} className="text-4xl md:text-5xl text-brand-orange drop-shadow-[0_0_20px_rgba(255,107,53,0.8)]">
            30 Years of Excellence
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-orange" />
        </motion.div>

        <motion.div
           initial="hidden"
           animate="visible"
           whileHover="hover"
           variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { duration: 1, delay: 0.4 } }
           }}
           className="relative inline-block mb-12 cursor-pointer"
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide italic lowercase capitalize-first">
            Engineering Strength, <span className="text-brand-orange font-medium">Architectural Vision.</span>
          </p>
          {/* Animated curved underline SVG */}
          <motion.svg 
            className="absolute -bottom-2 left-0 w-full h-3 max-w-full stroke-brand-orange" 
            viewBox="0 0 100 20" 
            preserveAspectRatio="none" 
            fill="none" 
            strokeWidth="3" 
            strokeLinecap="round"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 0 },
              hover: { opacity: 1, transition: { duration: 0.2 } }
            }}
          >
            <motion.path 
              d="M0,10 Q50,20 100,0"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 0 },
                hover: { pathLength: 1, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            />
          </motion.svg>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 font-montserrat tracking-widest uppercase text-sm font-bold bg-brand-orange text-white hover:bg-orange-600 transition-colors shadow-[0_0_20px_var(--color-brand-orange-glow)] rounded-sm"
          >
            Contact Us
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 font-montserrat tracking-widest uppercase text-sm font-bold bg-white text-brand-dark hover:bg-gray-200 transition-colors shadow-xl rounded-sm"
          >
            Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Industrial Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute hidden md:block w-32 h-32 border-2 border-brand-orange/20 -right-10 top-1/4 shadow-[0_0_15px_var(--color-brand-orange-glow)] rotate-45 pointer-events-none backdrop-blur-sm"
      />
    </section>
  );
};

export default Hero;
