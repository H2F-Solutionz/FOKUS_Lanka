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
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fokus-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-fokus-gold font-bold text-sm tracking-widest uppercase">About Fokus Lanka</span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-fokus-navy mb-2 leading-tight mt-2">
              Bringing <span className="bg-gradient-to-r from-fokus-gold to-fokus-orange bg-clip-text text-transparent">Excellence</span> Home
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-fokus-gold to-fokus-orange mb-8 rounded-full"></div>
            
            <div className="space-y-5 text-sm text-fokus-grey leading-relaxed">
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
            <div className="grid grid-cols-2 gap-5 mt-12">
              {highlights.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -4 }}
                  className="flex items-start gap-3 bg-gradient-to-br from-fokus-light to-white p-4 rounded-xl border border-fokus-gold/10 hover:border-fokus-gold/30 transition-all"
                >
                  <div className="p-2 bg-white rounded-md shadow-sm mt-0.5">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-fokus-navy text-sm">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1500&auto=format&fit=crop" 
                alt="Construction Planning" 
                className="w-full h-auto object-cover md:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fokus-navy/30 to-transparent"></div>
            </motion.div>
            {/* Background Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-96 h-96 border-4 border-fokus-gold/20 rounded-2xl z-0 hidden lg:block"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
