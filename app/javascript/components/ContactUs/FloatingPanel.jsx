import React from 'react';
import Map from './Map';
import ContactDetails from './ContactDetails';

export default function FloatingPanel() {
  return (
    <div className="floating-panel">
      <div className="heading">
        <h1> Contact Us </h1>
      </div>
      <Map />
      <ContactDetails />
    </div>
  );
}
