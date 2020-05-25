import React from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


export function MapContainer({ google }) {
  const mapStyles = {
    position: 'relative',
    width: '100%',
    height: '300px',
  };

  return (
    <Map
      google={google}
      zoom={15}
      style={mapStyles}
      initialCenter={{ lat: 43.446202, lng: -80.516054 }}
      className="google-map"
    >
      <Marker position={{ lat: 43.446202, lng: -80.516054 }} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: '',
})(MapContainer);

MapContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  google: PropTypes.object.isRequired,
};
