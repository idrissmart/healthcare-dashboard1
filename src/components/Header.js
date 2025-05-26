import React from 'react';
import { FaBell, FaPlus } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h2>Healthcare.</h2>
      <input type="text" placeholder="Search..." />
      <FaBell />
      <img src="/assets/avatar.png" alt="User" className="avatar" />
      <FaPlus />
    </div>
  );
}

export default Header;
