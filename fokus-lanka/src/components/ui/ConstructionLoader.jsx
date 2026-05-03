import React from 'react';
import './Loader.css';

const ConstructionLoader = () => {
  return (
    <div className="loader-overlay">
      {/* Background grid lines */}
      <div className="loader-grid" />

      {/* Corner architectural accents */}
      <div className="loader-corner tl" />
      <div className="loader-corner tr" />
      <div className="loader-corner bl" />
      <div className="loader-corner br" />

      <div className="loader-container">

        {/* ── Ring System ── */}
        <div className="loader-ring-wrap">
          {/* Dashed outer ring */}
          <div className="ring-outer" />

          {/* Conic gradient spinning ring */}
          <div className="ring-mid" />

          {/* Orbiting particle 1 */}
          <div className="orbit-wrap" style={{ '--dur': '3s', '--dir': 'normal' }}>
            <div className="orbit-dot" style={{ '--sz': '8px', '--clr': '#D4AF37' }} />
          </div>

          {/* Orbiting particle 2 */}
          <div className="orbit-wrap" style={{ '--dur': '4.5s', '--dir': 'reverse', inset: '-35px' }}>
            <div className="orbit-dot" style={{ '--sz': '5px', '--clr': '#FF8C00' }} />
          </div>

          {/* Orbiting particle 3 */}
          <div className="orbit-wrap" style={{ '--dur': '6s', '--dir': 'normal', inset: '-50px' }}>
            <div className="orbit-dot" style={{ '--sz': '4px', '--clr': 'rgba(212,175,55,0.6)' }} />
          </div>

          {/* Core disc with icon */}
          <div className="ring-core">
            <span className="ring-core-icon" role="img" aria-label="building">🏗️</span>
          </div>
        </div>

        {/* ── Brand Name ── */}
        <h1 className="loader-brand">Fokus Lanka</h1>
        <p className="loader-tagline">Engineering Excellence • Est. Jaffna</p>

        {/* ── Progress bar ── */}
        <div className="loader-progress-wrap">
          <div className="loader-progress-bar" />
        </div>

        {/* ── Bounce dots ── */}
        <div className="loader-dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default ConstructionLoader;
