var React = require('react');
var ReactDOM = require('react-dom');
//require('./css/styles.css');
import styles from './scss/index.scss';

class App extends React.Component {
  render() {
    return (
      <div className="hello">Hello World!</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);