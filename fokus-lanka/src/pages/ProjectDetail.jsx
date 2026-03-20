import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Project Not Found</h2>
        <Link to="/projects" className="text-fokus-gold hover:underline flex items-center justify-center gap-2">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-fokus-light min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Breadcrumb / Back Link */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-fokus-blue font-semibold mb-8 hover:text-fokus-gold transition-colors"
        >
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Main Title & Location */}
          <div className="p-8 lg:p-12 border-b border-gray-100">
            <span className="text-fokus-orange font-bold uppercase tracking-widest flex items-center gap-2 mb-2 text-sm">
              <MapPin size={16} /> {project.location}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-fokus-navy leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Large Hero Image */}
          <div className="h-[400px] md:h-[600px] w-full overflow-hidden">
            <img 
              src={project.mainImage} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Wrapper */}
          <div className="p-8 lg:p-16 grid lg:grid-cols-3 gap-16">
            
            {/* Left: Detailed Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-poppins text-fokus-navy mb-4">Project Overview</h3>
                <p className="text-fokus-grey text-lg leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              {/* Technical Specs / Details Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                {project.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-fokus-light p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 className="text-fokus-gold shrink-0" size={20} />
                    <span className="text-fokus-navy font-medium">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="pt-8">
                <h3 className="text-2xl font-bold font-poppins text-fokus-navy mb-6">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.gallery.map((img, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="rounded-xl overflow-hidden h-64 shadow-md border border-gray-100"
                    >
                      <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar Action */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-8 bg-fokus-navy text-white rounded-2xl shadow-xl">
                <h4 className="text-xl font-bold font-poppins mb-4">Interested in such a project?</h4>
                <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                  We can help you build your custom dream home with the same standards and attention to detail seen in our portfolio.
                </p>
                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-fokus-gold hover:bg-fokus-orange text-white py-4 rounded-lg font-bold transition-all"
                >
                  Start Your Project
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <a 
                    href="tel:+940701080100" 
                    className="block w-full text-center border border-white/20 hover:bg-white/10 text-white py-4 rounded-lg font-bold transition-all text-sm"
                  >
                    Call +94 070 10 80 100
                  </a>
                  <a 
                    href="tel:+940706070100" 
                    className="block w-full text-center border border-white/20 hover:bg-white/10 text-white py-4 rounded-lg font-bold transition-all text-sm"
                  >
                    Call +94 070 60 70 100
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
