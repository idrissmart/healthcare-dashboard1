import React from 'react';
import './Sidebar.css';
import { FaChartBar, FaCalendar, FaComments, FaCog, FaHistory, FaHome, FaListAlt, FaUserMd } from 'react-icons/fa';

const generalLinks = [
  { label: 'Dashboard', icon: <FaHome />, active: true },
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
      <div className="sidebar-logo">
        <span className="logo-blue">Health</span>
        <span className="logo-dark">care.</span>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-section-title">GENERAL</div>
        <ul>
          {generalLinks.map(link => (
            <li
              className={`sidebar-link${link.active ? ' active' : ''}`}
              key={link.label}
            >
              <span className="sidebar-icon">{link.icon}</span>
              <span>{link.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-section-title">TOOLS</div>
        <ul>
          {toolLinks.map(link => (
            <li className="sidebar-link" key={link.label}>
              <span className="sidebar-icon">{link.icon}</span>
              <span>{link.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-setting">
        <span className="sidebar-icon"><FaCog /></span>
        <span>Setting</span>
      </div>
    </div>
  );
}

export default Sidebar;
