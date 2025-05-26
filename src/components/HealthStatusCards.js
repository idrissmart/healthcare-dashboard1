import React from 'react';
import { healthCards } from '../data/healthData';
import './HealthStatusCards.css';

function HealthStatusCards() {
  return (
    <div className="health-cards">
      {healthCards.map((card, index) => (
        <div key={index} className={`card ${card.status}`}>
          <h4>{card.title}</h4>
          <p>{card.date}</p>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
