const SectionHeading = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 
        className={`text-3xl md:text-4xl font-bold font-poppins mb-4 relative inline-block ${
          light ? 'text-white' : 'text-fokus-navy'
        }`}
      >
        {title}
        {/* Accent Underline */}
        <span className={`absolute -bottom-2 ${centered ? 'left-1/2 -translate-x-1/2' : 'left-0'} w-1/2 h-1 bg-fokus-gold rounded-full`}></span>
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mt-4 ${centered ? 'mx-auto' : ''} ${
          light ? 'text-gray-300' : 'text-fokus-grey'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
