import axios from 'axios';
import { LOGGED_IN, LOGGED_OUT } from '../actions/actionTypes.js';

const initalState = {
  loggedIn: false,
  userInfo: {}
}

export default function(state = initalState, action) {
  switch(action.type){
      case LOGGED_IN:
        return {
          loggedIn: true,
          userInfo: action.payload
        };
      case LOGGED_OUT:
        return {
          loggedIn: false,
          userInfo: {}
        };
      default:
        return state;
  }
}
