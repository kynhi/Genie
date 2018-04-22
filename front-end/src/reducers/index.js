import {combineReducers} from 'redux';
import userReducer from './userReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
  user: userReducer,
  currentEvent: eventReducer
});

export default rootReducer;
