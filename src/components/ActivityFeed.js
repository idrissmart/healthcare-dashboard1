import React from 'react';
import './ActivityFeed.css';

const activityData = [
  { day: 'Mon', value: 40 },
  { day: 'Tues', value: 60 },
  { day: 'Wed', value: 50 },
  { day: 'Thurs', value: 30 },
  { day: 'Fri', value: 70 },
  { day: 'Sat', value: 20 },
  { day: 'Sun', value: 40 },
];

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <span className="activity-title">Activity</span>
        <span className="activity-subtitle">3 appointment on this week</span>
      </div>
      <div className="activity-chart-grid">
        {activityData.map((item, idx) => (
          <div className="activity-bar-wrapper" key={item.day}>
            <div
              className="activity-bar"
              style={{
                height: `${item.value * 1.2}px`,
                background: idx === 4 ? '#00e6e6' : '#4a90e2'
              }}
            />
            <div className="activity-day">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
