import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './index.css';

import App from './App';
import callApp from './callApp';

const createStoreWithMiddleware = applyMiddleware(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/callApp" component={callApp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
