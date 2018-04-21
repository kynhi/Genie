import axios from 'axios';
import { LOGGED_IN, LOGGED_OUT } from './actionTypes.js';

export default function(state = null, action) => {
  switch(action.type){
      case LOGGED_IN:
        return action.payload;
      case LOGGED_OUT:
        return null;
      default:
        return state;
  }
}
