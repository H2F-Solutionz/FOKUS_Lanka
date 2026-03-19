import SectionHeading from '../ui/SectionHeading';

const FounderSection = () => {
  return (
    <section className="py-20 bg-fokus-light">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row relative">
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-fokus-gold/10 rounded-bl-full z-0"></div>

          {/* Image */}
          <div className="w-full md:w-2/5 shrink-0 bg-gray-200 relative">
            <img 
              src="https://images.unsplash.com/photo-1623340333276-857c742c069c?q=80&w=800&auto=format&fit=crop" 
              alt="Lead Civil Engineer" 
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-3/5 p-10 lg:p-16 flex flex-col justify-center relative z-10">
            <h3 className="text-fokus-gold font-bold text-sm tracking-widest uppercase mb-2">Meet Our Lead</h3>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-fokus-navy mb-2">
              The Founder
            </h2>
            <p className="text-xl text-fokus-blue font-medium mb-6">
              BSc (Hons) Civil Engineering, UK
            </p>
            
            <div className="w-16 h-1 bg-fokus-orange mb-8 rounded-full"></div>

            <p className="text-fokus-grey text-lg leading-relaxed mb-8">
              With a career spanning over three decades in the United Kingdom's demanding construction industry, our founder brings a wealth of international expertise back home to Sri Lanka. Specializing in structural integrity, rigorous project management, and uncompromising quality, his mission is to elevate residential building standards in Jaffna.
            </p>

            <blockquote className="border-l-4 border-fokus-gold pl-6 italic text-fokus-navy/80 text-xl font-medium">
              "Our goal is to help families build safe, durable, and well-planned homes with complete confidence."
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
