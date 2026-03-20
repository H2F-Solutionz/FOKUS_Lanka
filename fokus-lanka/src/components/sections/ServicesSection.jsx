import SectionHeading from '../ui/SectionHeading';
import { Home, ClipboardList, PenTool, FileCheck, Hammer, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: <Home size={32} className="text-white" />,
    title: "Residential Construction",
    description: "End-to-end building of custom homes following UK-level standards of quality and safety."
  },
  {
    icon: <FileCheck size={32} className="text-white" />,
    title: "Planning Approval",
    description: "Professional assistance with documentation and securing necessary building permissions."
  },
  {
    icon: <PenTool size={32} className="text-white" />,
    title: "Architectural Design Support",
    description: "Collaborating on structural and architectural layouts for optimal space and strength."
  },
  {
    icon: <ClipboardList size={32} className="text-white" />,
    title: "JMC Approval Assistance",
    description: "Guidance through local Jaffna Municipal Council regulations and approval processes."
  },
  {
    icon: <Hammer size={32} className="text-white" />,
    title: "Renovation Work",
    description: "Transforming existing structures with modern designs, structural repairs, and extensions."
  },
  {
    icon: <Headphones size={32} className="text-white" />,
    title: "Construction Consultation",
    description: "Expert advice on materials, cost estimation, and structural integrity for ongoing projects."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-fokus-navy text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Our Services" 
          subtitle="Comprehensive engineering and construction services tailored for modern homes."
          centered={true}
          light={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {servicesData.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Hover Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-fokus-gold translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300"></div>
              
              <div className="mb-6 w-16 h-16 bg-fokus-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl mt-4 font-bold font-poppins mb-3 tracking-wide">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed font-light">
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
