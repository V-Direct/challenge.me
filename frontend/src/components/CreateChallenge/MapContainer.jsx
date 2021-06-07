import React, { Component } from "react";
import {
  GoogleMap,
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow,
} from "google-maps-react";

const mapStyles = {
  width: "40%",
  height: "45%",
  padding: "",
  postion: "absolute",
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: [
        {
          title: "The marker`s title will appear as a tooltip.",
          name: "SOMA",
          position: { lat: 48.210033, lng: 16.363449 },
        },
      ],
      showingInfoWindow: false,
      selectedPlace: {},
    };
  }

  onMapClick = (mapProps, map, clickEvent) => {
    console.log("moin");
    const { latLng } = clickEvent;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState((prevState) => {
      return {
        marker: {
          title: "",
          name: "",
          postion: {
            lat: lat,
            lng: lng,
          },
        },
      };
    });
  };

  render() {
    console.log("RENDER", this.state.marker);
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={this.state.marker.position}
        onClick={this.onMapClick}
      >
        <Marker postion={this.state.marker.position} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "xxx",
})(MapContainer);
