import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
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
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-white mb-4 leading-tight drop-shadow-lg">
            Building Homes with <span className="bg-gradient-to-r from-fokus-gold to-fokus-orange bg-clip-text text-transparent">Excellence</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-fokus-gold to-fokus-orange mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-100 mb-12 font-light drop-shadow-md max-w-2xl mx-auto">
            Professional civil engineering and residential construction with UK-level standards. Transforming dreams into reality.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link
              to="#services"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-gradient-to-r from-fokus-gold to-fokus-orange hover:shadow-2xl transition-all duration-300 text-white px-10 py-4 rounded-lg font-semibold text-base shadow-lg transform hover:-translate-y-1 uppercase tracking-wider"
            >
              View Services
            </Link>
            <Link
              to="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-white/20 border-2 border-fokus-gold hover:bg-white/30 transition-all duration-300 text-white px-10 py-4 rounded-lg font-semibold text-base shadow-lg transform hover:-translate-y-1 uppercase tracking-wider backdrop-blur-sm"
            >
              Get Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="text-white text-center text-sm font-light">
          <p className="mb-2">Scroll to explore</p>
          <div className="w-1 h-6 mx-auto border border-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
