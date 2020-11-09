import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Marker = ({ text }) =>
  <div className='marker'>
    <span className='marker-text'>{text}</span>
    <FaMapMarkerAlt size={20} className='marker-icon' />
  </div>;

class Map extends Component {

  static defaultProps = {
    center: {
      lat: 52.377131,
      lng: 16.990049
    },
    zoom: 11.5
  };

  render() {
    return (
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAP3TBzDKZvX8XKSmcGZ2K4l7M6YbmrRxU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={52.343156}
            lng={17.017384}
            text="Biuro"
          />

          <Marker
            lat={52.367809}
            lng={16.980561}
            text="Bocznica"
          />
          <Marker
            lat={52.416125}
            lng={16.967128}
            text="Bocznica"
          />
          <Marker
            lat={52.3455}
            lng={17.015178}
            text="Kruszywa"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map