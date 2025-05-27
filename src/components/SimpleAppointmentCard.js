import React from 'react';
import './SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="appointment-card">
      <span className="appointment-icon">{icon}</span>
      <div className="appointment-info">
        <span className="appointment-title">{title}</span>
        <span className="appointment-time">{time}</span>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
