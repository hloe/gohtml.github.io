var React = require('react');
var ReactDOM = require('react-dom');

const Todo = ({ todo, remove }) => {
  // Each Todo
  return (
    <li onClick={() => { remove(todo.id) }}>{ todo.text } x</li>
  );
};

module.exports = Todo;