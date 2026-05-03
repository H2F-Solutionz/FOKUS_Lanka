import React from 'react';
import logo from '../../assets/logo.png';
import './Loader.css';

const ConstructionLoader = () => {
  return (
    <div className="loader-overlay">
      {/* ── Blueprint Background ── */}
      <div className="blueprint-grid" />
      
      {/* ── Animated Drafting Lines ── */}
      <div className="drafting-container">
        {/* Decorative Circles */}
        <div className="loader-circle" style={{ width: '400px', height: '400px', animationDuration: '15s' }} />
        <div className="loader-circle" style={{ width: '500px', height: '500px', animationDuration: '20s', borderStyle: 'dashed' }} />
        
        {/* Dynamic Sketch Lines */}
        <div className="drafting-line line-h" style={{ top: '35%' }} />
        <div className="drafting-line line-h" style={{ top: '65%' }} />
        <div className="drafting-line line-v" style={{ left: '35%' }} />
        <div className="drafting-line line-v" style={{ left: '65%' }} />
        
        {/* Scanner Effect */}
        <div className="scanner-beam" />

        {/* ── Central Logo ── */}
        <div className="loader-logo-wrap">
          <img 
            src={logo} 
            alt="Fokus Lanka" 
            className="loader-logo-img brightness-0 invert opacity-90"
          />
        </div>
      </div>

      {/* ── Brand Detail ── */}
      <div className="loader-content">
        <div className="loading-text">Engineering Excellence</div>
        <div className="loading-sub">Precision • Innovation • Heritage</div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-fokus-gold/20" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-fokus-gold/20" />
    </div>
  );
};

export default ConstructionLoader;
