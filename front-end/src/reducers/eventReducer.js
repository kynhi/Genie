import {SELECT_EVENT} from '../actions/actionTypes';

const initalState = {
  event: {}
}

export default function(state = initalState, action){
  switch(action.type){
    case SELECT_EVENT:
      if(action.error){
        return state;
      }
      return action.payload.data;
    default:
      return state;
  }
}
