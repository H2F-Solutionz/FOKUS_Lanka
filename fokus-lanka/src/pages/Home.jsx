import HeroSection from '../components/sections/HeroSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import { Link } from 'react-router-dom';

const Home = () => {
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
