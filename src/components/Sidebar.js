import React from 'react';
import './Sidebar.css';
import { FaChartBar, FaCalendar, FaComments, FaCog, FaHistory, FaHome, FaListAlt, FaUserMd } from 'react-icons/fa';

const generalLinks = [
  { label: 'Dashboard', icon: <FaHome /> },
  { label: 'History', icon: <FaHistory /> },
  { label: 'Calendar', icon: <FaCalendar /> },
  { label: 'Appointments', icon: <FaListAlt /> },
  { label: 'Statistics', icon: <FaChartBar /> },
];

const toolLinks = [
  { label: 'Chat', icon: <FaComments /> },
  { label: 'Support', icon: <FaUserMd /> },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">
        <span style={{ color: '#4a90e2' }}>Health</span>care.
      </h2>

      <div className="sidebar-section">
        <div className="sidebar-section-title">General</div>
        <ul>
          {generalLinks.map(link => (
            <li className="sidebar-link" key={link.label}>
              <span className="sidebar-icon">{link.icon}</span>
              {link.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Tools</div>
        <ul>
          {toolLinks.map(link => (
            <li className="sidebar-link" key={link.label}>
              <span className="sidebar-icon">{link.icon}</span>
              {link.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-setting">
        <span className="sidebar-icon"><FaCog /></span>
        Setting
      </div>
    </div>
  );
}

export default Sidebar;
