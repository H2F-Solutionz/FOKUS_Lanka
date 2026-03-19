import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "30+ years of high-level engineering experience.",
  "UK-qualified civil engineering background.",
  "Specialized focus on durable residential homes.",
  "Meticulous attention to planning and JMC approvals.",
  "Uncompromising devotion to strong quality standards.",
  "Dedicated local support based in Jaffna."
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-fokus-light/50 skew-x-12 translate-x-16 -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold font-poppins text-fokus-navy mb-6">
              Why Choose <span className="text-fokus-gold">Fokus Lanka?</span>
            </h2>
            <div className="w-20 h-1 bg-fokus-orange mb-8 rounded-full"></div>
            
            <p className="text-lg text-fokus-grey leading-relaxed mb-10">
              Building a home is one of the most significant investments of your life. 
              We bring world-class engineering discipline to your doorstep in Jaffna, 
              ensuring your peace of mind from the drafting board to the final brick.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="text-fokus-orange shrink-0 mt-1" size={24} />
                  <span className="text-fokus-navy font-medium text-lg">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1504307659564-90f67ab42dd2?q=80&w=800&auto=format&fit=crop" 
                alt="Engineering blueprint" 
                className="w-full h-64 object-cover rounded-xl mt-8 shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=800&auto=format&fit=crop" 
                alt="Construction team" 
                className="w-full h-80 object-cover rounded-xl shadow-xl"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-fokus-navy text-white w-40 h-40 rounded-full flex flex-col items-center justify-center p-4 text-center border-4 border-white shadow-2xl">
              <span className="text-4xl font-bold text-fokus-gold">30+</span>
              <span className="font-poppins text-sm uppercase tracking-wide mt-1">Years<br/>Quality</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
