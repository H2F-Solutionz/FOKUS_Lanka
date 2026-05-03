import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';

const FounderSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-fokus-light via-white to-fokus-light/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 flex flex-col md:flex-row relative">
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-fokus-gold/5 rounded-bl-full z-0"></div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/5 shrink-0 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1560264357-8d9766d54a20?q=80&w=800&auto=format&fit=crop" 
              alt="Lead Civil Engineer" 
              className="w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fokus-navy/20 to-transparent"></div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-3/5 p-8 lg:p-12 flex flex-col justify-center relative z-10"
          >
            <span className="text-fokus-gold font-bold text-sm tracking-widest uppercase mb-2">Meet Our Leader</span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-fokus-navy mb-1">
              N.K. Kumarasooriyar
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-fokus-gold to-fokus-orange mb-6 rounded-full"></div>
            <div className="flex flex-col gap-0.5 mb-8">
              <span className="text-lg text-fokus-gold font-semibold">Senior Consultant & CEO</span>
              <span className="text-base text-gray-500 font-medium tracking-wide">B.Eng (Hons), London</span>
            </div>

            <p className="text-sm text-fokus-grey leading-relaxed mb-8">
              With a career spanning over three decades in the United Kingdom's demanding construction industry, our founder brings a wealth of international expertise back home to Sri Lanka. Specializing in structural integrity, rigorous project management, and uncompromising quality, his mission is to elevate residential building standards in Jaffna.
            </p>

            <blockquote className="border-l-4 border-fokus-gold pl-6 italic text-fokus-navy/90 text-base font-medium leading-relaxed bg-fokus-light/50 py-4 px-6 rounded-r-lg">
              "Our goal is to help families build safe, durable, and well-planned homes with complete confidence."
            </blockquote>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
