import React from 'react';
import './Loader.css';

const ConstructionLoader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        
        {/* Main morphing blob with orbiting elements */}
        <div className="modern-loader">
          {/* Orbiting circles */}
          <div className="orbit">
            <div className="particle"></div>
          </div>
          <div className="orbit">
            <div className="particle"></div>
          </div>
          <div className="orbit">
            <div className="particle"></div>
          </div>

          {/* Morphing blob animation */}
          <div className="blob-container">
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
          </div>

          {/* Center glowing pulse */}
          <div className="loader-center">
            <div className="center-pulse"></div>
          </div>
        </div>

        {/* Loading text with shimmer effect */}
        <div className="loading-text-container">
          <h2 className="loading-text">Crafting Excellence</h2>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Loading status */}
        <div className="loader-status">Preparing Your Experience</div>
      </div>
    </div>
  );
};

export default ConstructionLoader;
