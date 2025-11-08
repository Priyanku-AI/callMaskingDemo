// components/RideStatus.js
import React from 'react';

const RideStatus = ({ driver }) => {
  return (
    <div className="ride-status-card">
      <div className="status-header">
        <h3>Ride Status</h3>
        <div className="status-badge active">Driver Assigned</div>
      </div>
      
      <div className="progress-tracker">
        <div className="progress-step completed">
          <div className="step-icon">✓</div>
          <span>Booked</span>
        </div>
        <div className="progress-step completed">
          <div className="step-icon">✓</div>
          <span>Driver Assigned</span>
        </div>
        <div className="progress-step active">
          <div className="step-icon">🚗</div>
          <span>Arriving</span>
        </div>
        <div className="progress-step">
          <div className="step-icon">🎯</div>
          <span>Arrived</span>
        </div>
      </div>
    </div>
  );
};

export default RideStatus;