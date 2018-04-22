import React, { Component } from 'react';
import EventsDisplay from './EventsDisplay.js';
import HeaderComponent from './Components/HeaderComponent';
import Event_Detail from './Components/Event-Detail/event-detail';
import RegisterComponent from './Components/RegisterComponent';
import $ from 'jquery';
import './Styles/RegisterStyle.css';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <EventsDisplay />
        <Event_Detail/>
        <RegisterComponent/>
      </div>
    );
  }
}
export default App;
