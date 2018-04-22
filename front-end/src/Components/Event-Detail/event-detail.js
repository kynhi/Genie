import React from 'react';
import ReactDOM from 'react-dom';
import "./event-detail.css";
import "./event.js";

// import FontIcon from 'material-ui/FontIcon';
//import Dialog from 'material-ui/Dialog';

const iconStyles = {color: '#999', fontSize: '1em'};

export default class Event_Detail extends React.Component
{
  render(){
    return(
      <div className="Event-Detail">
        <h2 > EVENT NAME </h2>
        <img src = "../image/750806.jpg" className = "Event-Image" alt = "Event Image" />
      </div>
    )
  }
}
