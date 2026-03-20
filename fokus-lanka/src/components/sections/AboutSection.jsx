import SectionHeading from '../ui/SectionHeading';
import { Award, ShieldCheck, Home, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const highlights = [
    { icon: <Award className="text-fokus-gold" size={24} />, title: "30+ Years Experience" },
    { icon: <ShieldCheck className="text-fokus-gold" size={24} />, title: "UK Qualified" },
    { icon: <Home className="text-fokus-gold" size={24} />, title: "Residential Focus" },
    { icon: <MapPin className="text-fokus-gold" size={24} />, title: "Based in Jaffna" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading 
              title="About Fokus Lanka" 
              subtitle="Bringing UK engineering excellence to Sri Lankan residential construction."
            />
            
            <div className="space-y-6 text-fokus-grey text-lg leading-relaxed">
              <p>
                Fokus Lanka is an elite engineering and construction firm led by a UK-qualified civil engineer with more than 30 years of extensive experience in the UK construction field.
              </p>
              <p>
                Currently based in Jaffna, our company helps clients build high-quality residential houses, applying UK-level standards, rigorous planning discipline, and practical engineering knowledge to local construction projects.
              </p>
              <p>
                We believe in combining international expertise with a strong understanding of local needs to deliver homes that are structurally sound, beautifully finished, and built to last generations.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-fokus-light p-4 rounded-lg border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="p-2 bg-white rounded-md shadow-sm">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-fokus-navy font-poppins">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1541888086925-920a0fd5f598?q=80&w=1500&auto=format&fit=crop" 
                alt="Construction Planning" 
                className="w-full h-auto object-cover md:h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fokus-navy/40 to-transparent"></div>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-fokus-orange rounded-xl z-0 hidden lg:block"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
