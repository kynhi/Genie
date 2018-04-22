import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';

export default class TestComponent extends Component {
  render(){
    return(
      <div>
        <HeaderComponent/>
        <h1> HELLO </h1>
      </div>
    )
  }
}
