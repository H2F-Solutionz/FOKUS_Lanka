import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, MapPin, CheckCircle2, Calendar, Tag, Phone, Mail, ChevronRight, ExternalLink, ZoomIn, Construction, Star, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!project) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 text-center min-h-screen flex flex-col items-center justify-center">
        <div className="mb-6 bg-fokus-navy/5 p-8 rounded-full">
          <Construction size={80} className="text-fokus-gold opacity-20" />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-fokus-navy">Project Not Found</h2>
        <p className="text-fokus-grey mb-8">This project doesn't exist in our portfolio.</p>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 bg-fokus-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-fokus-blue transition-all"
        >
          <ArrowLeft size={18} /> Back to Projects
        </button>
      </div>
    );
  }

  // Badge color
  const badgeStyle =
    project.badge === 'UK Portfolio' ? { bg: 'rgba(26,54,93,0.9)', text: '#93c5fd', border: 'rgba(147,197,253,0.3)' } :
      project.badge === 'Active Project' ? { bg: 'rgba(20,83,45,0.9)', text: '#86efac', border: 'rgba(134,239,172,0.3)' } :
        project.badge === 'Completed' ? { bg: 'rgba(120,53,15,0.9)', text: '#fcd34d', border: 'rgba(252,211,77,0.3)' } :
          { bg: 'rgba(30,30,30,0.9)', text: '#e5e7eb', border: 'rgba(229,231,235,0.3)' };

  const allImages = [project.mainImage, ...project.gallery];

  return (
    <div className="min-h-screen bg-fokus-light">

      {/* ── HERO ── */}
      <div className="relative h-[65vh] min-h-[460px] max-h-[700px] overflow-hidden">
        <motion.img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-fokus-navy/95 via-fokus-navy/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-fokus-navy/60 to-transparent" />

        {/* Back button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 transition-all hover:bg-black/50"
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Badges row */}
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5"
                style={{ background: badgeStyle.bg, color: badgeStyle.text, border: `1px solid ${badgeStyle.border}`, backdropFilter: 'blur(8px)' }}
              >
                <Star size={10} fill="currentColor" /> {project.badge}
              </span>
              <span className="flex items-center gap-1.5 text-white/60 text-xs font-medium">
                <Calendar size={12} /> {project.year}
              </span>
              <span className="flex items-center gap-1.5 text-white/60 text-xs font-medium">
                <Tag size={12} /> {project.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold font-poppins text-white leading-tight mb-2">
              {project.title}
            </h1>
            <p className="flex items-center gap-2 text-fokus-gold font-semibold text-base">
              <MapPin size={16} /> {project.location}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── KEY STATS BAR ── */}
      {project.highlights && (
        <div className="bg-fokus-navy border-b border-white/10">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {project.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="py-5 px-6 text-center"
                >
                  <div className="text-2xl font-extrabold font-poppins" style={{ background: 'linear-gradient(90deg,#D4AF37,#FF8C00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {h.value}
                  </div>
                  <div className="text-white/50 text-xs uppercase tracking-wider font-medium mt-1">{h.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT — Overview + Details + Gallery */}
          <div className="lg:col-span-2 space-y-14">

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-extrabold font-poppins text-fokus-navy mb-2">Project Overview</h2>
              <div className="h-1 w-14 rounded-full mb-6" style={{ background: 'linear-gradient(90deg,#D4AF37,#FF8C00)' }} />
              <div className="space-y-4">
                {project.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-fokus-grey leading-relaxed text-base">{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-3xl font-extrabold font-poppins text-fokus-navy mb-2">Project Details</h2>
              <div className="h-1 w-14 rounded-full mb-6" style={{ background: 'linear-gradient(90deg,#D4AF37,#FF8C00)' }} />
              <div className="grid sm:grid-cols-2 gap-4">
                {project.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-xl border hover:border-fokus-gold/40 hover:-translate-y-0.5 transition-all"
                    style={{ background: 'linear-gradient(135deg, #F7FAFC, #fff)', borderColor: 'rgba(212,175,55,0.15)' }}
                  >
                    <CheckCircle2 className="text-fokus-gold shrink-0 mt-0.5" size={20} />
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-fokus-grey/60">{detail.label}</span>
                      <p className="text-fokus-navy font-semibold text-sm mt-0.5">{detail.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl font-extrabold font-poppins text-fokus-navy mb-2">Gallery</h2>
              <div className="h-1 w-14 rounded-full mb-6" style={{ background: 'linear-gradient(90deg,#D4AF37,#FF8C00)' }} />

              {/* Main gallery viewer */}
              <div
                className="relative h-72 md:h-[480px] rounded-[2rem] overflow-hidden mb-4 cursor-zoom-in group shadow-2xl border border-white/20"
                onClick={() => setLightboxImg(allImages[activeGalleryIdx])}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeGalleryIdx}
                    src={allImages[activeGalleryIdx]}
                    alt={`Gallery ${activeGalleryIdx + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-fokus-navy/0 group-hover:bg-fokus-navy/10 transition-all flex items-center justify-center">
                  <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 mt-4">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGalleryIdx(idx)}
                    className="rounded-xl overflow-hidden h-20 relative border-2 transition-all"
                    style={{ borderColor: activeGalleryIdx === idx ? '#D4AF37' : 'transparent' }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    {activeGalleryIdx !== idx && <div className="absolute inset-0 bg-black/40 hover:bg-black/10 transition-all" />}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Sticky Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="sticky top-28 space-y-5"
            >

              {/* CTA Card */}
              <div
                className="rounded-3xl overflow-hidden shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #0F2040 0%, #1A365D 100%)', border: '1px solid rgba(212,175,55,0.2)' }}
              >
                {/* Gold accent bar */}
                <div style={{ height: '3px', background: 'linear-gradient(90deg, #D4AF37, #FF8C00)' }} />

                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg,#D4AF37,#FF8C00)' }}>
                    <ExternalLink size={22} color="white" />
                  </div>
                  <h4 className="text-xl font-bold font-poppins text-white mb-2">Start Your Project</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Interested in building your dream home to the same standards? Let's discuss your vision.
                  </p>

                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full text-white py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 hover:shadow-lg mb-3"
                    style={{ background: 'linear-gradient(90deg, #D4AF37, #FF8C00)', boxShadow: '0 6px 20px rgba(212,175,55,0.3)' }}
                  >
                    Get a Free Quote <ChevronRight size={16} />
                  </Link>

                  <div className="space-y-2.5">
                    <a
                      href="tel:+940701080100"
                      className="flex items-center gap-3 w-full text-white/80 hover:text-white py-3 px-4 rounded-xl font-medium text-sm transition-all hover:bg-white/10 border border-white/10 hover:border-white/20"
                    >
                      <Phone size={15} className="text-fokus-gold shrink-0" />
                      +94 070 10 80 100
                    </a>
                    <a
                      href="tel:+940706070100"
                      className="flex items-center gap-3 w-full text-white/80 hover:text-white py-3 px-4 rounded-xl font-medium text-sm transition-all hover:bg-white/10 border border-white/10 hover:border-white/20"
                    >
                      <Phone size={15} className="text-fokus-gold shrink-0" />
                      +94 070 60 70 100
                    </a>
                    <a
                      href="mailto:info@fokuslanka.com"
                      className="flex items-center gap-3 w-full text-white/80 hover:text-white py-3 px-4 rounded-xl font-medium text-sm transition-all hover:bg-white/10 border border-white/10 hover:border-white/20"
                    >
                      <Mail size={15} className="text-fokus-gold shrink-0" />
                      info@fokuslanka.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Other Projects */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-5">
                <h5 className="text-sm font-bold uppercase tracking-widest text-fokus-navy mb-4">Other Projects</h5>
                <div className="space-y-3">
                  {projectsData.filter(p => p.id !== project.id).slice(0, 2).map(p => (
                    <Link
                      key={p.id}
                      to={`/projects/${p.id}`}
                      className="flex items-center gap-3 group hover:bg-fokus-light rounded-xl p-2 transition-all"
                    >
                      <img src={p.mainImage} alt={p.title} className="w-14 h-14 object-cover rounded-xl shrink-0 group-hover:scale-105 transition-transform duration-300" />
                      <div className="min-w-0">
                        <p className="text-fokus-navy font-semibold text-sm leading-tight group-hover:text-fokus-gold transition-colors truncate">{p.title}</p>
                        <p className="text-fokus-grey text-xs mt-0.5 truncate">{p.location}</p>
                      </div>
                      <ChevronRight size={14} className="text-fokus-gold shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
                <Link to="/projects" className="flex items-center justify-center gap-1 mt-4 text-fokus-gold font-semibold text-xs tracking-wide hover:gap-2 transition-all">
                  View All Projects <ChevronRight size={13} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setLightboxImg(null)}
          >
            <motion.img
              src={lightboxImg}
              alt="Full size"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
              style={{ maxHeight: '90vh', maxWidth: '90vw' }}
            />
            <button
              className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              onClick={() => setLightboxImg(null)}
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
