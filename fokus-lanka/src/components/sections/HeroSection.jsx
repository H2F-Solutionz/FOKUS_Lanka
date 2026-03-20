import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';
import hero4 from '../../assets/hero4.png';

const slides = [
  {
    image: hero1, // custom hero image
    heading: "Building Homes with UK Standards",
    text: "Professional civil engineering and residential construction support in Jaffna.",
    buttonText: "View Services",
    buttonLink: "/services"
  },
  {
    image: hero2, // structural engineering / planning
    heading: "30+ Years of Engineering Experience",
    text: "Trusted expertise from a UK-qualified civil engineer.",
    buttonText: "About Us",
    buttonLink: "/about"
  },
  {
    image: hero4, // beautiful residential house
    heading: "From Planning to Construction",
    text: "Helping you through design, approvals, and building execution.",
    buttonText: "See Projects",
    buttonLink: "/projects"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ x: direction > 0 ? '100%' : direction < 0 ? '-100%' : '100%' }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? '-100%' : direction < 0 ? '100%' : '-100%' }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 * direction }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6 leading-tight drop-shadow-lg">
                {slides[currentSlide].heading}
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light drop-shadow-md">
                {slides[currentSlide].text}
              </p>
              <Link
                to={slides[currentSlide].buttonLink}
                className="inline-block bg-fokus-gold hover:bg-fokus-orange transition-all duration-300 text-white px-8 py-4 rounded-md font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {slides[currentSlide].buttonText}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/60 text-white rounded-full transition-colors hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={36} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/60 text-white rounded-full transition-colors hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={36} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-fokus-gold w-8' : 'bg-white/50 hover:bg-white'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
