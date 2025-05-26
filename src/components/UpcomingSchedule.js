import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

const upcomingAppointments = [
  {
    day: 'Thursday',
    items: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '💉' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' },
    ],
  },
  {
    day: 'Saturday',
    items: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { title: 'Neurologist', time: '16:00 PM', icon: '🧑‍⚕️' },
    ],
  },
];

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3 className="upcoming-title">The Upcoming Schedule</h3>
      {upcomingAppointments.map((block, idx) => (
        <div className="schedule-block" key={idx}>
          <h4 className="schedule-day">On {block.day}</h4>
          <div className="schedule-cards-row">
            {block.items.map((item, i) => (
              <SimpleAppointmentCard key={i} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
