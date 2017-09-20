import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

import App from './components/App';

import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
