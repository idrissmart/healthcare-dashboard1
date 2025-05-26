import React from 'react';
import './SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="appointment-card">
      <span className="appointment-icon">{icon}</span>
      <div className="appointment-info">
        <div className="appointment-title">{title}</div>
        <div className="appointment-time">{time}</div>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
