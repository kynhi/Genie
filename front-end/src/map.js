import React from "react"

const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MapWithMarkerInfoWindow= compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
  >
      {props.markers.map(marker => (
         <Marker
           position={{ lat: marker.latitude, lng: marker.longitude }}
           title = {marker.owner_url}
           onClick={props.onMarkerClick.bind(this,marker)}
         />
         // console.log(marker.owner_url);
         // return(
            //   <MarkerWithLabel
            //
            //   position={{ lat: marker.latitude, lng: marker.longitude }}
            //   labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
            //   >
            //   <div> Hello!</div>
            // </MarkerWithLabel>
         //);
    ))}
  </GoogleMap>

);


export default class MyFancyComponent extends React.PureComponent {

  componentWillMount() {
    this.state = {
      markers: [],
    }
  }

  onToggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

  componentDidMount() {
    const url = [
      // Length issue
      `https://gist.githubusercontent.com`,
      `/farrrr/dfda7dd7fccfec5474d3`,
      `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    ].join("")
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: data.photos });
      });
  }

  // execute when click on marker. the parameter is the json object
  handleMarkerClick = (marker) => {
        console.log(`Current clicked markers length: ${marker.photo_id}`)
        window.location.href = 'http://www.google.com';
  }
  render() {
    return (
      <MapWithMarkerInfoWindow markers={this.state.markers}
        onMarkerClick={this.handleMarkerClick}  />
    )
  }
}
