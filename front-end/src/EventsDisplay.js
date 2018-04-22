import React, { Component } from 'react';
import MyFancyComponent from './map.js';
import Intro from './Intro.js';

export default class EventsDisplay extends Component {
  render() {
    return (
      <div className='Map'>
        <Intro/>
        <br/>
        <MyFancyComponent />
      </div>
    );
  }
}
