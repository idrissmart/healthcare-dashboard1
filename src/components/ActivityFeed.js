import React from 'react';
import './ActivityFeed.css';

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments this week</p>
      <div className="bar-chart">
        {[60, 80, 40, 30, 70].map((height, i) => (
          <div key={i} className="bar" style={{ height: `${height}px` }}></div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
