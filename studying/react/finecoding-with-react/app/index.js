const React = require('react');
const ReactDOM = require('react-dom');
require('./styles.min.css');
const App = require('./components/App');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);