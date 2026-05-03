import SectionHeading from '../ui/SectionHeading';
import { Home, ClipboardList, PenTool, FileCheck, Hammer, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: <Home size={32} className="text-white" />,
    image: "https://images.unsplash.com/photo-1534237886769-175ecc127edb?q=80&w=400&auto=format&fit=crop",
    title: "Residential Construction",
    description: "End-to-end building of custom homes following UK-level standards of quality and safety."
  },
  {
    icon: <FileCheck size={32} className="text-white" />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop",
    title: "Planning Approval",
    description: "Professional assistance with documentation and securing necessary building permissions."
  },
  {
    icon: <PenTool size={32} className="text-white" />,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&auto=format&fit=crop",
    title: "Architectural Design Support",
    description: "Collaborating on structural and architectural layouts for optimal space and strength."
  },
  {
    icon: <ClipboardList size={32} className="text-white" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop",
    title: "JMC Approval Assistance",
    description: "Guidance through local Jaffna Municipal Council regulations and approval processes."
  },
  {
    icon: <Hammer size={32} className="text-white" />,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400&auto=format&fit=crop",
    title: "Renovation Work",
    description: "Transforming existing structures with modern designs, structural repairs, and extensions."
  },
  {
    icon: <Headphones size={32} className="text-white" />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop",
    title: "Construction Consultation",
    description: "Expert advice on materials, cost estimation, and structural integrity for ongoing projects."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-fokus-navy via-fokus-navy to-fokus-blue text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-fokus-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-fokus-orange/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading 
          title="Our Services" 
          subtitle="Comprehensive engineering and construction services tailored for modern homes."
          centered={true}
          light={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {servicesData.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 hover:border-fokus-gold/30 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 cursor-pointer relative overflow-hidden"
            >
              {/* Hover Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fokus-gold to-fokus-orange translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300"></div>
              
              {/* Service Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-5 w-full h-32 rounded-xl overflow-hidden bg-white/10 border border-white/20"
              >
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="mb-4 w-14 h-14 bg-gradient-to-br from-fokus-gold to-fokus-orange rounded-xl flex items-center justify-center shadow-lg"
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-lg font-bold font-poppins mb-2 tracking-wide group-hover:text-fokus-gold transition-colors">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed font-light text-sm group-hover:text-gray-100 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
