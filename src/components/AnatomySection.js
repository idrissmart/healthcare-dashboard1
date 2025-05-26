import React from 'react';
import './AnatomySection.css';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img src="/assets/human-body.jpg" alt="Human Body" className="body-img" />
      {/* Healthy Heart overlay */}
      <div className="status-overlay heart">
        <span role="img" aria-label="heart" className="status-icon">❤️</span>
        Healthy Heart
      </div>
      {/* Healthy Log overlay */}
      <button className="status-overlay log">
        Healthy Log
      </button>
    </div>
  );
}

export default AnatomySection;
