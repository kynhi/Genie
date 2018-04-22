import axios from 'axios';
import {SELECT_EVENT} from './actionTypes';
const ROOT_URL = 'http://localhost:8080';

export function selectEvent(id) {
  const url = `${ROOT_URL}/event/${id}`
  const request = axios.get(url);
  return {
    type: SELECT_EVENT,
    payload: request
  }
}
