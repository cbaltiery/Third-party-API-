
import React, { Component } from "react";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
 
const mapStyles = {
    width: '100%',
    height: '100%'
  };

  class myMap extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }

    render() {
      return (
        <div>
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 40.7282594,
              lng: -73.8553368
            }}
          >
           <Marker
            onClick={this.onMarkerClick}
            name={'This is test name'}
          />
          </Map>
        </div>
      );
    }
  }
 
export default GoogleApiWrapper({
  apiKey: (process.env.APIKEY)
})(myMap)