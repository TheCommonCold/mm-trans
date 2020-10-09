import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  static defaultProps = {
    center: {
      lat: 52.343156,
      lng: 17.017384
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAP3TBzDKZvX8XKSmcGZ2K4l7M6YbmrRxU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="MM-Trans"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map