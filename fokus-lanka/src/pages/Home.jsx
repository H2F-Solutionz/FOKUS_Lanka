import { useState, useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ConstructionLoader from '../components/ui/ConstructionLoader';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show Drop & Build loader for a short duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ConstructionLoader />;
  }

  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />

      {/* Short Project Preview Section for Home Page */}
      <div className="bg-fokus-light pb-20">
        <ProjectsSection />
        <div className="container mx-auto px-6 text-center mt-[-40px]">
          <Link
            to="/projects"
            className="inline-block bg-fokus-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-fokus-blue transition-colors shadow-lg"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
