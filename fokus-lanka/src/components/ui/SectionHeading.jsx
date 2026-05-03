const SectionHeading = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 
        className={`text-4xl md:text-5xl lg:text-5xl font-bold font-poppins mb-2 relative inline-block ${
          light ? 'text-white' : 'text-fokus-navy'
        }`}
      >
        {title}
      </h2>
      <div className={`h-1 w-20 bg-gradient-to-r from-fokus-gold to-fokus-orange rounded-full ${centered ? 'mx-auto mt-3' : 'mt-3'}`}></div>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl mt-4 leading-relaxed ${centered ? 'mx-auto' : ''} ${
          light ? 'text-gray-300' : 'text-fokus-grey'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
