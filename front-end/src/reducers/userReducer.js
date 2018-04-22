import axios from 'axios';
import { LOGGED_IN, LOGGED_OUT, REGISTER_USER } from '../actions/actionTypes.js';
import history from '../history';

const initalState = {
  loggedIn: false,
  userInfo: {}
}

export default function(state = initalState, action) {
  switch(action.type){
      case LOGGED_IN:
        if(action.error){
          console.log('bad');
          return state;
        }
        return {
          loggedIn: true,
          userInfo: action.payload.data
        };
      case LOGGED_OUT:
        return {
          loggedIn: false,
          userInfo: {}
        };
      case REGISTER_USER:
        if(action.error){
          return state;
        }
        return {
          loggedIn: true,
          userInfo: action.payload.data
        };
      default:
        return state;
  }
}
