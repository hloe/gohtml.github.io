var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var Title = require('./components/Title');
var Todo = require('./components/Todo');
var TodoList = require('./components/TodoList');
var TodoForm = require('./components/TodoForm');

// Todo id
window.id = 0;
class TodoApp extends React.Component {
  constructor (props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
    this.apiUrl = '//57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
  }
  
  // Lifecycle method
  componentDidMount () {
    // Make HTTP request with Axios
    axios.get(this.apiUrl)
      .then((res) => {
      // Set state with result
      this.setState({ data:res.data });
    });
  }
  
  // Add todo handler
  addTodo(val) {
    // Assemble data
    const todo = { text: val }
    // Update data
    axios.post(this.apiUrl, todo)
      .then((res) => {
      // Update data
      this.state.data.push(res.data);
      // Update state
      this.setState({ data: this.state.data });
      });
  }
  
  // Handle remove
  handleRemove(id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if (todo.id !== id) return todo;
    });
    // Update state with filter
    axios.delete(this.apiUrl+'/'+id)
      .then((res) => {
        this.setState({ data: remainder });
      })
  }
  
  render () {
    // Render JSX
    return (
      <div className="todoListMain">
        <Title todoCount={this.state.data.length} />
        <TodoForm addTodo = { this.addTodo.bind(this) } />
        <TodoList 
          todos = { this.state.data }
          remove = { this.handleRemove.bind(this) }          
        />
      </div>
    );
  }
};

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);