import React, { useState, useEffect } from 'react';

function RideTracking() {
  const [rideDetails, setRideDetails] = useState({
    currentLocation: 'Loading...',
    destinationLocation: 'Loading...',
    status: 'Loading...',
  });

  useEffect(() => {
    // Fetch ride status from backend
    fetch('/api/get-ride-status')
      .then((res) => res.json())
      .then((data) => setRideDetails(data));
  }, []);

  return (
    <div className="ride-tracking">
      <h2>Tracking Your Ride</h2>
      <p>Current Location: {rideDetails.currentLocation}</p>
      <p>Destination: {rideDetails.destinationLocation}</p>
      <p>Status: {rideDetails.status}</p>
    </div>
  );
}

export default RideTracking;
