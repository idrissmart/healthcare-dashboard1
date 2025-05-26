import React from 'react';
import { upcomingAppointments } from '../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.map((block, idx) => (
        <div key={idx} className="schedule-block">
          <h4>On {block.day}</h4>
          {block.items.map((item, i) => (
            <SimpleAppointmentCard key={i} {...item} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
