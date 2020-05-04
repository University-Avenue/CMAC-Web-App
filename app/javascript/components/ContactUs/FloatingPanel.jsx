import React from 'react';
import ContactDetails from './ContactDetails';
import MapContainer from './MapContainer';

export default function FloatingPanel() {
  return (
    <div className="floating-panel">
      <div className="heading">
        <h1> Contact Us </h1>
      </div>
      <div className="map-container">
        <MapContainer />
      </div>
      <ContactDetails />
    </div>
  );
}
