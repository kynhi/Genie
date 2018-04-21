import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import NavBar from './Components/NavBar.js'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import EventsDisplay from './EventsDisplay.js'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <NavBar />
    <App />
  </Provider>
  ,document.getElementById('root')
);
registerServiceWorker();
