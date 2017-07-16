var React = require('react');
var ReactDOM = require('react-dom');

const Title = ({ todoCount }) => {
  return (
    <div>
      <h1>To-Do ({ todoCount })</h1>
    </div>
  );
};

module.exports = Title;