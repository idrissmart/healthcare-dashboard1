import React from 'react';
import './CalendarView.css';
import { FaPlus } from 'react-icons/fa';

const days = [
  { label: 'Mon', date: 25 },
  { label: 'Tues', date: 26 },
  { label: 'Wed', date: 27 },
  { label: 'Thurs', date: 28 },
  { label: 'Fri', date: 29 },
  { label: 'Sat', date: 30 },
  { label: 'Sun', date: 31 },
];

const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

const appointments = [
  { day: 1, time: '09:00', label: 'Dentist', color: '#4a50e2', doctor: 'Dr. Cameron Williamson', icon: '🦷', duration: '09:00-11:00' },
  { day: 1, time: '11:00', label: 'Physiotherapy Appointment', color: '#e3e8fa', doctor: 'Dr. Kevin Djones', icon: '🦴', duration: '11:00-12:00' },
  { day: 5, time: '12:00', label: '', color: '#4a90e2', doctor: '', icon: '', duration: '12:00' },
  { day: 6, time: '09:00', label: '', color: '#4a90e2', doctor: '', icon: '', duration: '09:00' },
];

function CalendarView() {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <span className="calendar-title">October 2021</span>
        <div className="calendar-header-right">
          <span className="calendar-avatar">
            <img src="/assets/avatar.jpg" alt="User" className="calendar-avatar-img" />
          </span>
          <button className="calendar-add-btn"><FaPlus /></button>
        </div>
      </div>
      <div className="calendar-table">
        <div className="calendar-days-row">
          {days.map((d, idx) => (
            <div key={idx} className="calendar-day-col">
              <div className="calendar-day-label">{d.label}</div>
              <div className="calendar-date">{d.date}</div>
            </div>
          ))}
        </div>
        <div className="calendar-times">
          {timeSlots.map((time, tIdx) => (
            <div key={tIdx} className="calendar-time-row">
              {days.map((d, dIdx) => {
                const appt = appointments.find(
                  a => a.day === dIdx && a.time === time
                );
                return (
                  <div key={dIdx} className="calendar-time-cell">
                    {appt ? (
                      <span
                        className="calendar-appt"
                        style={{
                          background: appt.color,
                          color: appt.color === '#4a50e2' ? '#fff' : '#1a237e',
                        }}
                      >
                        {time}
                      </span>
                    ) : (
                      <span className="calendar-time-faint">{time}</span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="calendar-appointments">
        <div className="calendar-appt-card main">
          <span className="calendar-appt-icon">🦷</span>
          <div>
            <div className="calendar-appt-title">Dentist</div>
            <div className="calendar-appt-time">09:00-11:00</div>
            <div className="calendar-appt-doctor">Dr. Cameron Williamson</div>
          </div>
        </div>
        <div className="calendar-appt-card secondary">
          <span className="calendar-appt-icon">🦴</span>
          <div>
            <div className="calendar-appt-title">Physiotherapy Appointment</div>
            <div className="calendar-appt-time">11:00-12:00</div>
            <div className="calendar-appt-doctor">Dr. Kevin Djones</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
