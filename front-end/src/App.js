import React, { Component } from 'react';
import EventsDisplay from './EventsDisplay.js';
import HeaderComponent from './Components/HeaderComponent';
import Event_Detail from './Components/Event-Detail/event-detail'
import Event_New from './Components/Event-New/Event_New'
import RegisterComponent from './Components/RegisterComponent';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <EventsDisplay />
        <Event_Detail/>
        <Event_New/>
        <RegisterComponent/>
      </div>
    );
  }
}
export default App;
