import React from 'react';
import './HealthStatusCards.css';

const healthCards = [
  {
    icon: '🫁',
    title: 'Lungs',
    date: 'Date: 26 Okt 2021',
    status: 'bad',
    progress: 30,
    color: '#ef5350'
  },
  {
    icon: '🦷',
    title: 'Teeth',
    date: 'Date: 26 Okt 2021',
    status: 'good',
    progress: 80,
    color: '#80cbc4'
  },
  {
    icon: '🦴',
    title: 'Bone',
    date: 'Date: 26 Okt 2021',
    status: 'bad',
    progress: 40,
    color: '#ef5350'
  }
];

function HealthStatusCards() {
  return (
    <div className="health-cards">
      {healthCards.map((card, idx) => (
        <div className="health-card" key={idx}>
          <div className="health-card-icon">{card.icon}</div>
          <div className="health-card-title">{card.title}</div>
          <div className="health-card-date">{card.date}</div>
          <div className="health-card-bar-bg">
            <div
              className="health-card-bar"
              style={{
                width: `${card.progress}%`,
                background: card.color
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
