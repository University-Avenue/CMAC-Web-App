import React from 'react';
import ContactDetails from './ContactDetails';
// eslint-disable-next-line import/no-named-as-default
import MapContainer from './MapContainer';

export default function FloatingPanel() {
  return (
    <div className="floating-panel">
      <div className="heading">
        <h1> Contact Us </h1>
      </div>
      <MapContainer />
      <ContactDetails />
    </div>
  );
}
