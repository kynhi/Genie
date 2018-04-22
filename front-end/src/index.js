import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import Login from './Components/Login'
import TestComponent from './Components/TestComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/test" component={TestComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);
registerServiceWorker();
