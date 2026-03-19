import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="font-inter bg-fokus-light min-h-screen relative w-full overflow-x-hidden flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/94773155125" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 flex items-center justify-center"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </Router>
  );
}

export default App;