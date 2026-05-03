import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen h-[100dvh] w-full overflow-hidden bg-black mt-0 pt-0">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/f_e_a_e_a_c_c_mp_.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-fokus-gold/30 bg-fokus-gold/10 backdrop-blur-sm"
          >
            <span className="text-fokus-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Premium Construction</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-poppins text-white mb-6 leading-[1.1] drop-shadow-2xl">
            Building Homes with <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-fokus-gold via-fokus-orange to-fokus-gold bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shimmer">Excellence</span>
          </h1>
          
          <div className="h-1 w-12 md:w-20 bg-gradient-to-r from-fokus-gold to-fokus-orange mx-auto mb-8 rounded-full"></div>
          
          <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-10 md:mb-12 font-light drop-shadow-md max-w-2xl mx-auto leading-relaxed">
            Professional civil engineering and residential construction with <span className="text-white font-medium">UK-level standards</span>. Transforming your architectural dreams into lasting reality in Jaffna.
          </p>
          
          <motion.div 
            className="flex flex-row gap-3 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              to="#services"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-gradient-to-r from-fokus-gold to-fokus-orange hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)] transition-all duration-300 text-white px-5 md:px-10 py-3 md:py-4 rounded-xl font-bold text-xs md:text-base shadow-lg transform hover:-translate-y-1 uppercase tracking-wider whitespace-nowrap"
            >
              Our Services
            </Link>
            <Link
              to="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-white/10 border-2 border-white/20 hover:border-fokus-gold hover:bg-white/20 transition-all duration-300 text-white px-5 md:px-10 py-3 md:py-4 rounded-xl font-bold text-xs md:text-base shadow-lg transform hover:-translate-y-1 uppercase tracking-wider backdrop-blur-md whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="text-white/70 text-center text-[10px] font-bold uppercase tracking-[0.2em]">
          <p className="mb-3">Explore</p>
          <div className="w-5 h-8 mx-auto border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-fokus-gold rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
