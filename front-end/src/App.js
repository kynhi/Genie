import React, { Component } from 'react';
import EventsDisplay from './EventsDisplay.js'
import HeaderComponent from './Components/HeaderComponent';


class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <EventsDisplay />
      </div>
    );
  }
}
export default App;
