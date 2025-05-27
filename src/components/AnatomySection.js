import React from 'react';
import './AnatomySection.css';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img src="/assets/human-body.jpg" alt="Human Body" className="body-img" />
      <div className="status-overlay heart">
        <span role="img" aria-label="heart" className="status-icon">❤️</span>
        Healthy Heart
      </div>
      <button className="status-overlay log">
        Healthy Log
      </button>
    </div>
  );
}

export default AnatomySection;