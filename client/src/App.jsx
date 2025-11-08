// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import BookingPanel from './components/BookingPanel';
import RideStatus from './components/RideStatus';
import CallMasking from './components/CallMasking';
import DriverInfo from './components/DriverInfo';
import './styles/globals.css';

function App() {
  const [rideStatus, setRideStatus] = useState('not_booked'); // 'not_booked', 'searching', 'assigned'
  const [driverInfo, setDriverInfo] = useState(null);

  const handleBookRide = () => {
    setRideStatus('searching');
    
    // Simulate driver assignment after 2 seconds
    setTimeout(() => {
      setRideStatus('assigned');
      setDriverInfo({
        name: 'Rajesh Kumar',
        rating: '4.8',
        vehicle: 'Toyota Etios - KA01AB1234',
        eta: '3 min',
        proxyNumber: '+91-XXXXX-12345'
      });
    }, 2000);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        {rideStatus === 'not_booked' && (
          <BookingPanel onBookRide={handleBookRide} />
        )}
        
        {rideStatus === 'searching' && (
          <div className="searching-state">
            <div className="loader"></div>
            <h2>Finding your driver...</h2>
          </div>
        )}
        
        {rideStatus === 'assigned' && driverInfo && (
          <div className="assigned-state">
            <DriverInfo driver={driverInfo} />
            <RideStatus driver={driverInfo} />
            <CallMasking proxyNumber={driverInfo.proxyNumber} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;