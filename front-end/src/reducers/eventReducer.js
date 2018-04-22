import {SELECT_EVENT} from '../actions/actionTypes';

const initalState = {
  event: {
    name: "name",
    detail: "details",
    users: []
  }
}

export default function(state = initalState, action){
  switch(action.type){
    case SELECT_EVENT:
      return action.payload;
    default:
      return state;
  }
}
