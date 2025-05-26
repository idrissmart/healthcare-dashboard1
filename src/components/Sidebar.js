import React from 'react';
import navigationLinks from '../data/navigation';
import './Sidebar.css';
import { FaChartBar, FaCalendar, FaComments, FaCog, FaHistory, FaHome, FaListAlt, FaUserMd } from 'react-icons/fa';

const icons = [FaHome, FaHistory, FaCalendar, FaListAlt, FaChartBar, FaComments, FaUserMd, FaCog];

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>General</h3>
      <ul>
        {navigationLinks.map((link, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <li key={idx}>
              <Icon className="sidebar-icon" /> {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
