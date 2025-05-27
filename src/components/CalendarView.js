import React, { useState } from 'react';
import './CalendarView.css';
import { FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const days = [
  { label: 'Mon', date: 25 },
  { label: 'Tues', date: 26 },
  { label: 'Wed', date: 27 },
  { label: 'Thurs', date: 28 },
  { label: 'Fri', date: 29 },
  { label: 'Sat', date: 30 },
  { label: 'Sun', date: 31 },
];

const timeSlots = ['10:00', '12:00', '14:00'];

const appointments = [
  { day: 1, time: '12:00', label: 'Dentist', color: '#4a50e2', doctor: 'Dr. Cameron Williamson', icon: '🦷', duration: '12:00-13:00' },
  { day: 2, time: '14:00', label: 'Physiotherapy', color: '#e3e8fa', doctor: 'Dr. Kevin Djones', icon: '🦴', duration: '14:00-15:00' },
];

function CalendarView() {
  const [month, setMonth] = useState('October 2021');
  const handlePrev = () => setMonth('September 2021');
  const handleNext = () => setMonth('November 2021');

  return (
    <div className="calendar-view compact">
      <div className="calendar-header">
        <button className="calendar-arrow" onClick={handlePrev}><FaChevronLeft /></button>
        <span className="calendar-title">{month}</span>
        <button className="calendar-arrow" onClick={handleNext}><FaChevronRight /></button>
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
                        {appt.label}
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
    </div>
  );
}

export default CalendarView;
