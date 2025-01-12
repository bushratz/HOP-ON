import React, { useState, useEffect } from 'react';

function DriverDashboard() {
  const [availableRides, setAvailableRides] = useState([]);

  useEffect(() => {
    // Fetch available ride requests from backend
    fetch('/api/available-rides')
      .then((res) => res.json())
      .then((data) => setAvailableRides(data));
  }, []);

  const handleAcceptRide = (rideId) => {
    fetch('/api/accept-ride', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rideId })
    })
      .then((response) => response.json())
      .then((data) => alert("Ride accepted successfully!"));
  };

  return (
    <div className="driver-dashboard">
      <h2>Available Ride Requests</h2>
      {availableRides.map((ride) => (
        <div key={ride.id} className="ride-item">
          <p>{`Pickup: ${ride.pickupLocation} - Destination: ${ride.destinationLocation}`}</p>
          <button onClick={() => handleAcceptRide(ride.id)}>Accept Ride</button>
        </div>
      ))}
    </div>
  );
}

export default DriverDashboard;
