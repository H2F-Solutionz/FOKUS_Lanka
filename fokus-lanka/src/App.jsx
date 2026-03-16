import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;