
// components/CallMasking.js
import React, { useState } from 'react';

const CallMasking = ({ proxyNumber }) => {
  const [isCalling, setIsCalling] = useState(false);

  const handleCall = () => {
    setIsCalling(true);
    // Simulate call connection
    setTimeout(() => {
      setIsCalling(false);
      alert(`Call connected through proxy: ${proxyNumber}\n\nNote: In real implementation, this would connect to Twilio's call masking service.`);
    }, 3000);
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
                Connecting...
              </>
            ) : (
              <>
                <span className="call-icon">📞</span>
                Call Driver Securely
              </>
            )}
          </button>
        </div>

        <div className="security-features">
          <div className="security-badge">
            <span className="badge-icon">🔒</span>
            <span>Number Privacy</span>
          </div>
          <div className="security-badge">
            <span className="badge-icon">🛡️</span>
            <span>Secure Connection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallMasking;