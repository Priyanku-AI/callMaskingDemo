import React, { useState, useEffect } from 'react';

const RiderDashboard = () => {
  const [rideInfo, setRideInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [calling, setCalling] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Simulate API call to your backend
  useEffect(() => {
    const fetchRideData = async () => {
      try {
        setTimeout(() => {
          setRideInfo({
            rideId: "123",
            status: "driver_assigned",
            driver: {
              name: "Raj Kumar",
              car: "Toyota Etios", 
              license: "DL1AB1234",
              rating: "4.8",
              phone: "+91-98765-43210"
            },
            pickup: "Connaught Place, Delhi",
            destination: "India Gate, Delhi",
            proxyNumber: "+91-98765-43210",
            eta: "5 min",
            distance: "2.3 km",
            fare: "₹145"
          });
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Error fetching ride data:', error);
        setLoading(false);
      }
    };

    fetchRideData();
  }, []);

  const handleCallDriver = () => {
    if (!rideInfo?.proxyNumber) return;
    
    setCalling(true);
    setTimeout(() => {
      window.open(`tel:${rideInfo.proxyNumber}`, '_self');
      setCalling(false);
    }, 1000);
  };

  if (loading) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-white">Finding your ride...</p>
        </div>
      </div>
    );
  }

  // App Header
  const AppHeader = () => (
    <div className="bg-black px-4 pt-8 pb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="text-white font-bold text-xl ml-2">RideSafe</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  // Map Section
  const MapSection = () => (
    <div className="bg-gray-800 h-48 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-2xl">🚗</span>
          </div>
          <div className="text-white text-sm">Live GPS Tracking Active</div>
        </div>
        
        <div className="absolute top-8 left-1/4">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-1 h-8 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="absolute bottom-8 right-1/4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-1 h-8 bg-red-500 mx-auto"></div>
        </div>
      </div>
    </div>
  );

  // Ride Info Card
  const RideInfoCard = () => (
    <div className="mx-4 -mt-6 relative z-10">
      <div className="bg-white rounded-xl shadow-2xl p-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium truncate">{rideInfo.pickup}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium truncate">{rideInfo.destination}</span>
            </div>
          </div>
          <div className="text-right ml-2">
            <div className="text-lg font-bold text-green-600">{rideInfo.fare}</div>
            <div className="text-xs text-gray-500">Estimated</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between border-t pt-3">
          <div className="text-center">
            <div className="text-xs text-gray-500">ETA</div>
            <div className="font-semibold text-sm">{rideInfo.eta}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500">Distance</div>
            <div className="font-semibold text-sm">{rideInfo.distance}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500">Ride ID</div>
            <div className="font-semibold text-sm">#{rideInfo.rideId}</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Driver Info
  const DriverInfo = () => (
    <div className="mx-4 mt-4">
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-xl">👨‍💼</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-sm">{rideInfo.driver.name}</h3>
              <p className="text-xs text-gray-600">{rideInfo.driver.car} • {rideInfo.driver.license}</p>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 text-xs">⭐</span>
                <span className="text-xs text-gray-600 ml-1">{rideInfo.driver.rating}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-green-600">{rideInfo.eta}</div>
            <div className="text-xs text-gray-500">away</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Call Masking Section
  const CallMaskingSection = () => (
    <div className="mx-4 mt-4">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 text-white">
        <div className="text-center mb-3">
          <div className="inline-flex items-center bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs font-medium mb-2">
            🔒 Secure Call
          </div>
          
          <p className="text-white text-opacity-90 text-sm mb-3">
            Your number is hidden. Call safely:
          </p>
          
          <div className="text-lg font-bold bg-white bg-opacity-10 py-2 px-4 rounded-lg border border-white border-opacity-20 mb-2">
            {rideInfo.proxyNumber}
          </div>
          
          <p className="text-xs text-white text-opacity-80">
            Driver sees only this temporary number
          </p>
        </div>

        <button 
          onClick={handleCallDriver}
          disabled={calling}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-green-600 transition-all duration-200 ${
            calling 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl'
          }`}
        >
          {calling ? (
            <div className="flex items-center justify-center text-sm">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600 mr-2"></div>
              Connecting...
            </div>
          ) : (
            <div className="flex items-center justify-center text-sm">
              <span className="text-lg mr-2">📞</span>
              Call Driver
            </div>
          )}
        </button>
      </div>
    </div>
  );

  // Bottom Navigation
  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center py-2">
        <button 
          className={`flex flex-col items-center p-1 ${activeTab === 'home' ? 'text-green-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('home')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </button>
        
        <button 
          className={`flex flex-col items-center p-1 ${activeTab === 'rides' ? 'text-green-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('rides')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs mt-1">Rides</span>
        </button>
        
        <button 
          className={`flex flex-col items-center p-1 ${activeTab === 'safety' ? 'text-green-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('safety')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-xs mt-1">Safety</span>
        </button>
        
        <button 
          className={`flex flex-col items-center p-1 ${activeTab === 'account' ? 'text-green-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('account')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs mt-1">Account</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto h-screen bg-gray-100 relative overflow-hidden">
      {/* Mobile Device Frame */}
      <div className="w-full h-full flex flex-col bg-white relative">
        
        {/* App Header */}
        <AppHeader />
        
        {/* Map Section */}
        <MapSection />
        
        {/* Ride Info Card */}
        <RideInfoCard />
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-16">
          {/* Driver Info */}
          <DriverInfo />
          
          {/* Call Masking Section */}
          <CallMaskingSection />
          
          {/* Safety Features */}
          <div className="mx-4 mt-4 mb-4">
            <div className="bg-white rounded-xl shadow-sm p-3">
              <h3 className="font-semibold text-gray-900 text-sm mb-2">Safety Features</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center p-2 bg-blue-50 rounded-lg border border-blue-100">
                  <span className="text-sm mr-1">🔒</span>
                  <span className="text-xs font-medium">Call Masking</span>
                </div>
                <div className="flex items-center p-2 bg-purple-50 rounded-lg border border-purple-100">
                  <span className="text-sm mr-1">📍</span>
                  <span className="text-xs font-medium">Live Tracking</span>
                </div>
                <div className="flex items-center p-2 bg-red-50 rounded-lg border border-red-100">
                  <span className="text-sm mr-1">🆘</span>
                  <span className="text-xs font-medium">Emergency</span>
                </div>
                <div className="flex items-center p-2 bg-green-50 rounded-lg border border-green-100">
                  <span className="text-sm mr-1">📋</span>
                  <span className="text-xs font-medium">Ride Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
};

export default RiderDashboard;