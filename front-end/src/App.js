import React, { Component } from 'react';
import logo from './logo.svg';
import EventsDisplay from './EventsDisplay.js'
import NavBar from './Components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <EventsDisplay />
      </div>
    );
  }
}
export default App;
