import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import "./event-detail.css";
import "./event.js";
import HeaderComponent from '../HeaderComponent';

// import FontIcon from 'material-ui/FontIcon';
//import Dialog from 'material-ui/Dialog';

const iconStyles = {color: '#999', fontSize: '1em'};

class Event_Detail extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      event_name: "Name",
      event_image: "Details",
      event_description: "Recyling is awesome!",
      num_attending: 10
    };
  }
  render(){
    return(
      <div classNameName="Event-Detail vcenter">
      <HeaderComponent/>
        <h2 > {this.props.currentEvent.name}  </h2> {/* event->name */}
        <img src={ require('./750806.jpg') } classNameName = "Event-Image" alt = "Event Image" /> {/* event->image */}
        <div className="Event-Description">
          <span> <strong> Event Discription: </strong></span>
          <span> {this.props.currentEvent.details} </span>  {/* event->description*/}
        </div>
        <div className="Num-Attending">
        <span> <strong> People Attending: </strong></span>
        
        </div>

      </div>
    )
  }
}

function mapStateToProps({currentEvent}){
  return {currentEvent};
}

export default connect(mapStateToProps)(Event_Detail);
