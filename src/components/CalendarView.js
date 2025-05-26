import React from 'react';
import { calendarAppointments } from '../data/appointments';
import './CalendarView.css';

function CalendarView() {
  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-grid">
        {Array.from({ length: 31 }, (_, i) => {
          const day = i + 1;
          const entry = calendarAppointments.find(app => parseInt(app.date) === day);
          return (
            <div key={day} className="calendar-day">
              <span>{day}</span>
              {entry && <span className="appointment-time">{entry.time}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarView;
