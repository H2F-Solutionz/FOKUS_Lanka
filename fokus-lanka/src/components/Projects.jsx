import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projectsData = [
  {
    title: "Modern Family Home",
    location: "Jaffna Town",
    description: "A spacious, multi-story house built for comfort and safety, following strict UK standards.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Luxury Villa Design",
    location: "Nallur",
    description: "Premium materials and modern architecture combined to create a beautiful, long-lasting home.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Urban Residence",
    location: "Chavakachcheri",
    description: "A smart, eco-friendly house designed to stay cool and strong in any weather.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050812] font-montserrat">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
             <div className="w-2 h-2 rounded-full bg-brand-orange" />
             <span className="text-white text-xs font-bold tracking-widest uppercase">
               Our Projects
             </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-white"
          >
            Our Recent Work. <br/>
            <span className="text-brand-orange">Beautiful Homes.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed"
          >
            Take a look at some of the houses we have built. Every home is made with the highest quality materials to keep your family safe and happy.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group cursor-pointer rounded-3xl bg-white/5 border border-white/10 overflow-hidden flex flex-col transition-all hover:border-brand-orange/40 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                 />
                 <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_15px_rgba(255,107,53,0.5)]">
                    <ArrowUpRight size={20} />
                 </div>
              </div>

              {/* Text Container */}
              <div className="p-8 flex flex-col grow">
                <div className="flex items-center gap-2 mb-3">
                   <div className="h-[1px] w-6 bg-brand-orange" />
                   <span className="text-brand-orange text-sm font-semibold tracking-wider uppercase">
                     {project.location}
                   </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light mt-auto">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
