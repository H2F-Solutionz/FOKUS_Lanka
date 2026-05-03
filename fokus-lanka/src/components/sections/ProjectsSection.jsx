import SectionHeading from '../ui/SectionHeading';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-gradient-to-b from-fokus-light via-white to-fokus-light">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fokus-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fokus-orange/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading 
          title="Featured Projects & Experience" 
          subtitle="A glimpse into our residential construction and broad engineering expertise."
          centered={true}
        />

        <div className="grid md:grid-cols-2 gap-16 mt-20">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, type: "spring", stiffness: 100 }}
              className="group relative"
            >
              {/* Card Glow Background */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-fokus-gold/20 to-fokus-orange/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-white transition-all duration-500 transform group-hover:-translate-y-4 group-hover:border-fokus-gold/30">
                {/* Featured Badge */}
                {idx === 0 && (
                  <motion.div 
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4 z-20 bg-gradient-to-r from-fokus-gold to-fokus-orange text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg transform"
                  >
                    ⭐ Featured
                  </motion.div>
                )}

                {/* Image Container with Overlay */}
                <div className="h-64 w-full overflow-hidden relative bg-gradient-to-br from-gray-300 to-gray-400">
                  {/* Animated gradient overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-t from-fokus-navy/60 via-transparent to-transparent z-10"
                  ></motion.div>
                  
                  {/* Main Image */}
                  <motion.img 
                    src={project.mainImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Corner accent lines */}
                  <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-fokus-gold opacity-60"></div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-fokus-orange opacity-60"></div>
                </div>

                {/* Content Panel */}
                <div className="p-8 relative z-10">
                  {/* Location Badge */}
                  <motion.p 
                    whileHover={{ x: 4 }}
                    className="text-xs text-fokus-orange font-bold uppercase tracking-widest mb-4 flex items-center gap-2"
                  >
                    <MapPin size={14} />
                    {project.location}
                  </motion.p>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold font-poppins text-fokus-navy mb-3 line-clamp-2 group-hover:text-fokus-gold transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-fokus-grey leading-relaxed mb-8 line-clamp-3">
                    {project.description}
                  </p>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-fokus-gold to-fokus-orange text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all group/link transform hover:scale-105"
                    >
                      <span>Explore Project</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={18} />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-fokus-navy text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-fokus-gold/30 hover:border-fokus-gold uppercase tracking-wider"
          >
            View All Projects →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
