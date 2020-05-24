import React from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export function MapContainer(props) {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '350px',
    minHeight: '350px',
  };

  const { google } = props;
  return (
    <Map
      google={google}
      style={containerStyle}
      zoom={14}
      initialCenter={{
        lat: -80.517085,
        lng: 43.445815,
      }}
      draggable
      className="map"
    />
  );
}

MapContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  google: PropTypes.object.isRequired,
};

export default GoogleApiWrapper({
  apiKey: '',
})(MapContainer);
