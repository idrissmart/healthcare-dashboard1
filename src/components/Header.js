import React from 'react';
import { FaBell, FaPlus, FaSearch } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="header-logo-blue">Health</span>
        <span className="header-logo-dark">care.</span>
      </div>
      <div className="header-search">
        <FaSearch className="header-search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="header-search-input"
        />
      </div>
      <div className="header-actions">
        <FaBell className="header-bell" />
        <div className="header-avatar-group">
          <img
            src="/assets/avatar.jpg"
            alt="User"
            className="header-avatar"
          />
          <button className="header-plus-btn">
            <FaPlus />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
