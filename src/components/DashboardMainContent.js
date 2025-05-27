import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import './DashboardMainContent.css';

function DashboardMainContent() {
  return (
    <div className="dashboard-main">
      <div className="dashboard-content">
        {/* Left/Main Section */}
        <div className="dashboard-left">
          <div className="dashboard-top-row">
            <div className="dashboard-anatomy-block">
              <AnatomySection />
            </div>
            <div className="dashboard-health-cards-block">
              <HealthStatusCards />
            </div>
          </div>
          <div className="dashboard-activity-block">
            <ActivityFeed />
          </div>
        </div>
        {/* Right/Sidebar Section */}
        <div className="dashboard-right">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
}

export default DashboardMainContent;
