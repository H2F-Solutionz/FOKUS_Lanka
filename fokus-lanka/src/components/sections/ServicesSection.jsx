import SectionHeading from '../ui/SectionHeading';
import { Home, ClipboardList, PenTool, FileCheck, Hammer, Headphones, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: <Home size={26} className="text-white" />,
    // Actual residential construction site with workers
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    title: "Residential Construction",
    description: "End-to-end building of custom homes following UK-level standards of quality and safety.",
    tag: "Core Service",
  },
  {
    icon: <FileCheck size={26} className="text-white" />,
    // Blueprint / planning documents on a desk
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800&auto=format&fit=crop",
    title: "Planning Approval",
    description: "Professional assistance with documentation and securing necessary building permissions.",
    tag: "Documentation",
  },
  {
    icon: <PenTool size={26} className="text-white" />,
    // Architect drawing floor plans / blueprints
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    title: "Architectural Design",
    description: "Collaborating on structural and architectural layouts for optimal space and strength.",
    tag: "Design",
  },
  {
    icon: <ClipboardList size={26} className="text-white" />,
    // Government / council building exterior
    image: "https://images.unsplash.com/photo-1562516155-e0c1ee44059b?q=80&w=800&auto=format&fit=crop",
    title: "JMC Approval Assistance",
    description: "Guidance through local Jaffna Municipal Council regulations and approval processes.",
    tag: "Compliance",
  },
  {
    icon: <Hammer size={26} className="text-white" />,
    // Renovation / workers on scaffolding
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    title: "Renovation Work",
    description: "Transforming existing structures with modern designs, structural repairs, and extensions.",
    tag: "Renovation",
  },
  {
    icon: <Headphones size={26} className="text-white" />,
    // Engineer with helmet consulting on site
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    title: "Construction Consultation",
    description: "Expert advice on materials, cost estimation, and structural integrity for ongoing projects.",
    tag: "Advisory",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-fokus-navy via-[#0a1a35] to-fokus-blue text-white relative overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fokus-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fokus-orange/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive engineering and construction services tailored for modern homes — built to UK standards, delivered with local expertise."
          centered={true}
          light={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
              }}
              whileHover={{
                y: -6,
                boxShadow: '0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,175,55,0.3)',
              }}
            >
              {/* Gold top accent on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] z-20"
                style={{
                  background: 'linear-gradient(90deg, #D4AF37, #FF8C00)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scaleX(1)'}
              />

              {/* Service Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428]/90 via-[#0a1428]/30 to-transparent" />

                {/* Tag badge */}
                <span
                  className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(212,175,55,0.15)',
                    border: '1px solid rgba(212,175,55,0.4)',
                    color: '#D4AF37',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #FF8C00)' }}
                >
                  {service.icon}
                </div>

                <h3 className="text-base font-bold font-poppins mb-2 tracking-wide transition-colors duration-300 group-hover:text-fokus-gold">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                  {service.description}
                </p>

                {/* Learn more link */}
                <div className="flex items-center gap-1.5 text-fokus-gold text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  <span>Learn More</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
