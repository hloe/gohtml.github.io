import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './styles.min.css';
import App from './components/App';
import Home from './components/Home';
import Works from './components/Works';
import Hire from './components/Hire';
import About from './components/About';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={Home}/>
      <Route path='/works' component={Works} />
      <Route path='/about' component={About} />
      <Route path='/hire' component={Hire} />
    </Route>
  </Router>,
  document.getElementById('app')
);