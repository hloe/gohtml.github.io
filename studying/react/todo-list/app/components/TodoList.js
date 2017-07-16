var React = require('react');
var ReactDOM = require('react-dom');
var Todo = require('../components/Todo');

const TodoList = ({ todos, remove }) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (
      <Todo todo = { todo } key = { todo.id } remove = { remove } />
    );
  });
  return (<div className="list-group">{ todoNode }</div>);
};

module.exports = TodoList;

