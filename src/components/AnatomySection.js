import React from 'react';
import { anatomyStatus } from '../data/healthData';
import './AnatomySection.css';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img src="/assets/human-body.png" alt="Human Body" className="body-img" />
      <ul className="status-overlay">
        {anatomyStatus.map((item, index) => (
          <li key={index} className={`status ${item.color}`}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnatomySection;
