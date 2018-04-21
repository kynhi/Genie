import React, { Component } from 'react';
import logo from './logo.svg';
import EventsDisplay from './EventsDisplay.js'
import NavBar from './Components/NavBar';
import Login from './Components/login';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Login />
        <EventsDisplay />
      </div>
    );
  }
}
export default App;
