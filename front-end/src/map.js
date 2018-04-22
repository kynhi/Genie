import React from "react"
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectEvent} from './actions/eventAction';
import history from './history';
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
    defaultZoom={8}
    defaultCenter={{ lat: 32.7766642, lng: -96.7969879}}
  >
      {props.markers.map(marker => (
         <Marker
           position={{ lat: marker.latitude, lng: marker.longitude }}
           title = {marker.name}
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


class MyFancyComponent extends React.PureComponent {

  componentWillMount() {
    this.state = {
      markers: [],
    }
  }

  onToggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen})
  }

  componentDidMount() {
    const url = 'http://localhost:8080/event';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: data.events });
      });
  }

  // execute when click on marker. the parameter is the json object
  handleMarkerClick = (marker) => {
        console.log(`Current clicked markers length: ${marker.photo_id}`);
        // console.log(marker);
        // window.location.href = marker.owner_url;
        //call eventAction
        this.props.selectEvent(marker);
        console.log(this.props.currentEvent);
        history.push('/event');
  }
  render() {
    return (
      <MapWithMarkerInfoWindow markers={this.state.markers}
        onMarkerClick={this.handleMarkerClick}  />
    )
  }
}

function mapStateToProps({currentEvent}){
  return {currentEvent};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectEvent}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFancyComponent);
