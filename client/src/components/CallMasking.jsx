// components/CallMasking.js
import React, { useState } from 'react';

const CallMasking = ({ proxyNumber }) => {
  const [isCalling, setIsCalling] = useState(false);
  const [callStatus, setCallStatus] = useState('');

  const handleCall = async () => {
    setIsCalling(true);
    setCallStatus('Initiating secure call...');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/callRider`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Empty body as requested
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      setCallStatus('Call connecting...');
      
      // Simulate call connection delay
      setTimeout(() => {
        setIsCalling(false);
        setCallStatus('');
        alert(`Call connected successfully!\n\nProxy: ${proxyNumber}\nStatus: ${result.message || 'Connected'}`);
      }, 2000);

    } catch (error) {
      console.error('Call initiation failed:', error);
      setIsCalling(false);
      setCallStatus('');
      alert(`Call failed: ${error.message}\n\nPlease check if the backend server is running on http://localhost:5000`);
    }
  };

  return (
    <div className="call-masking-card">
      <div className="safety-header">
        <div className="shield-icon">🛡️</div>
        <h3>Your Safety is Our Priority</h3>
      </div>
      
      <div className="call-masking-info">
        <p className="safety-text">
          Your personal number is protected. All calls are routed through our secure proxy system.
        </p>
        
        <div className="proxy-number-display">
          <label>Call your driver at:</label>
          <div className="proxy-number">{proxyNumber}</div>
          <small className="proxy-note">This is a secure proxy number</small>
        </div>

        <div className="call-actions">
          <button 
            className={`call-button ${isCalling ? 'calling' : ''}`}
            onClick={handleCall}
            disabled={isCalling}
          >
            {isCalling ? (
              <>
                <div className="calling-animation"></div>
                {callStatus || 'Connecting...'}
              </>
            ) : (
              <>
                <span className="call-icon">📞</span>
                Call Driver Securely
              </>
            )}
          </button>
        </div>

        {callStatus && (
          <div className="call-status-message">
            {callStatus}
          </div>
        )}

        <div className="security-features">
          <div className="security-badge">
            <span className="badge-icon">🔒</span>
            <span>Number Privacy</span>
          </div>
          <div className="security-badge">
            <span className="badge-icon">🛡️</span>
            <span>Secure Connection</span>
          </div>
          <div className="security-badge">
            <span className="badge-icon">🌐</span>
            <span>Live API</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallMasking;