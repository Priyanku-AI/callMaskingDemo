// components/BookingPanel.js
import React from 'react';

const BookingPanel = ({ onBookRide }) => {
  return (
    <div className="booking-panel">
      <div className="panel-card">
        <h2>Book Your Ride</h2>
        
        <div className="location-inputs">
          <div className="input-group">
            <label>Pickup Location</label>
            <input 
              type="text" 
              placeholder="Enter pickup location"
              defaultValue="Connaught Place, Delhi"
            />
          </div>
          
          <div className="input-group">
            <label>Destination</label>
            <input 
              type="text" 
              placeholder="Enter destination"
              defaultValue="India Gate, Delhi"
            />
          </div>
        </div>

        <div className="ride-type-selection">
          <h4>Choose your ride</h4>
          <div className="ride-options">
            <div className="ride-option active">
              <span className="ride-icon">🚗</span>
              <div className="ride-info">
                <span className="ride-name">City Sedan</span>
                <span className="ride-price">₹245</span>
              </div>
            </div>
          </div>
        </div>

        <button className="book-button" onClick={onBookRide}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingPanel;