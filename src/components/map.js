import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Marker = ({ text }) =>
  <div className='marker'>
    <FaMapMarkerAlt size={20} className='marker-icon' />
  </div>;

class Map extends Component {

  static defaultProps = {
    center: {
      lat: 52.343156,
      lng: 17.017384
    },
    zoom: 12
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
          />

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map