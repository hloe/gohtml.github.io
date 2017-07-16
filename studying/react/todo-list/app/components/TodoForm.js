var React = require('react');
var ReactDOM = require('react-dom');

const TodoForm = ({ addTodo }) => {
  // Input tracker
  let input;
  
  return (
    <div>
      <input ref = { node => {
          input = node;
        }} />
      <button onClick = {() => {
        addTodo(input.value);
        input.value = '';
      }}>
        +
      </button>
    </div>
  );
};

module.exports = TodoForm;