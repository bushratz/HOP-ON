import React, { useState } from 'react';

function RideRequestForm() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const handleRequestRide = () => {
    // Call your backend API to request a ride
    fetch('/api/request-ride', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pickupLocation: pickup, destinationLocation: destination })
    })
      .then(response => response.json())
      .then(data => alert("Ride requested successfully!"));
  };

  return (
    <div className="ride-request">
      <h2>Request a Ride</h2>
      <input
        type="text"
        placeholder="Enter pick-up location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter destination location"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={handleRequestRide}>Request Ride</button>
    </div>
  );
}

export default RideRequestForm;
