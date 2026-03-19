import SectionHeading from '../ui/SectionHeading';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-fokus-light">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Featured Projects & Experience" 
          subtitle="A glimpse into our residential construction and broad engineering expertise."
          centered={true}
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* Image Container */}
              <div className="h-72 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-fokus-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.mainImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Panel */}
              <div className="p-8">
                <p className="text-sm text-fokus-orange font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-fokus-orange inline-block"></span>
                  {project.location}
                </p>
                <h3 className="text-2xl font-bold font-poppins text-fokus-navy mb-3">
                  {project.title}
                </h3>
                <p className="text-fokus-grey leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-fokus-blue font-semibold hover:text-fokus-gold transition-colors">
                  View Details <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
