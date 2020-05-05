import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const containerStyle = {
      position: 'relative',
      width: '100%',
      height: '350px',
    };

    return (
      <Map
        google={this.props.google}
        style={containerStyle}
        zoom={14}
        initialCenter={{
          lat: -80.517085,
          lng: 43.445815,
        }}
        draggable={false}
        className="map"
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCMY9N0cHCSjYOeApjSPA1YBjayZZ0r6oA',
})(MapContainer);
