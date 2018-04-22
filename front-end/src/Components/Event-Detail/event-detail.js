import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import "./event-detail.css";
import "./event.js";

// import FontIcon from 'material-ui/FontIcon';
//import Dialog from 'material-ui/Dialog';

const iconStyles = {color: '#999', fontSize: '1em'};

class Event_Detail extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      event_name: "",
      event_image: "",
      event_description: "",
      num_attending: ""
    };
  }
  render(){
    return(
      <div classNameName="Event-Detail">
        <h2 > {this.props.currentEvent.name}  </h2> {/* event->name */}
        <img src={ require('./750806.jpg') } classNameName = "Event-Image" alt = "Event Image" /> {/* event->image */}
        <div className="Event-Description">
          <span> <strong> Event Discription: </strong></span>
          <span> {this.props.currentEvent.details} </span>  {/* event->description*/}
        </div>
        <div className="Num-Attending">
        <span> <strong> People Attending: </strong></span>
        <span> {this.props.currentEvent.users.length} </span>  {/* event->num_attending*/}
        </div>

      </div>
    )
  }
}

function mapStateToProps({currentEvent}){
  return {currentEvent};
}

export default connect(mapStateToProps)(Event_Detail);
