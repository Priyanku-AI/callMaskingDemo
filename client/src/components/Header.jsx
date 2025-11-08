// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🚗</span>
          <h1>CityRide</h1>
        </div>
        <div className="user-menu">
          <div className="user-avatar">
            <span>RK</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;