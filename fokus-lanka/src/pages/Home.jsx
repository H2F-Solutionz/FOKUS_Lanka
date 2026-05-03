import HeroSection from '../components/sections/HeroSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import AboutSection from '../components/sections/AboutSection';
import FounderSection from '../components/sections/FounderSection';
import ServicesSection from '../components/sections/ServicesSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div id="home">
        <HeroSection />
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Founder Section */}
      <FounderSection />

      {/* Services Section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
