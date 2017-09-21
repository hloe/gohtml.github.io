import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

import App from './components/App';

import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
);

