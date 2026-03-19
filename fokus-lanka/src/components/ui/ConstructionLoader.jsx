import React from 'react';
import './Loader.css';

const ConstructionLoader = () => {
  return (
    <div className="loader-overlay">
      <div className="building-site">
        {/* We create 3 blocks that will drop at different times */}
        <div className="block block-1"></div>
        <div className="block block-2"></div>
        <div className="block block-3"></div>
        <div className="ground-line"></div>
      </div>
      <h2 className="loading-text">CONSTRUCTING YOUR VISION...</h2>
    </div>
  );
};

export default ConstructionLoader;
