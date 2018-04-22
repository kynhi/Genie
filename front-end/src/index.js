import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import Login from './Components/Login';
import EventForm from './Components/EventForm';
import TestComponent from './Components/TestComponent';
import RegisterComponent from './Components/RegisterComponent';
import EventDetail from './Components/Event-Detail/event-detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/test" component={TestComponent} />
          <Route exact path="/register" component={RegisterComponent} />
          <Route exact path="/event" component={EventDetail} />
          <Route exact path="/eventform" component={EventForm} />
        </Switch>
      </div>
    </Router>
  </Provider>
  ,document.getElementById('root')
);
registerServiceWorker();
