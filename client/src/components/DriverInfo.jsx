// components/DriverInfo.js
import React from 'react';

const DriverInfo = ({ driver }) => {
  return (
    <div className="driver-info-card">
      <div className="driver-header">
        <div className="driver-avatar">
          <span>{driver.name.split(' ').map(n => n[0]).join('')}</span>
        </div>
        <div className="driver-details">
          <h3>{driver.name}</h3>
          <div className="driver-rating">
            <span className="rating">⭐ {driver.rating}</span>
          </div>
        </div>
      </div>
      
      <div className="vehicle-details">
        <div className="vehicle-info">
          <span className="vehicle-icon">🚗</span>
          <span>{driver.vehicle}</span>
        </div>
        <div className="eta">
          <span className="eta-label">ETA: </span>
          <span className="eta-time">{driver.eta}</span>
        </div>
      </div>
    </div>
  );
};

export default DriverInfo;