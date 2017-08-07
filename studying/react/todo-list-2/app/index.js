const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

const TodoBanner = () => {
  return(
    <h3 className='todo__banner'>TODO List</h3>
  );
}        

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return ( 
      <ol className='todo__list'>
        {this.props.items.map(function(item, index) {
          return(
            <li className='todo__item' 
              key={index}>
              {item} <span className="to-delete"
                onClick={this.props.onSelect.bind(null, item)}>
                X
              </span>
            </li>
          );
        }.bind(this))}
      </ol>
    );
  }
}

class TodoForm extends React.Component {
  constructor() {
    super();
    
    this.state = {
      item: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    if (this.state.item !== '') {
      this.props.onFormSubmit(this.state.item);
      this.setState({
        item: ''
      });        
      return false;
    } 
    return false;
  }

  onChange (event) {
    this.setState({
      item: event.target.value
    });
  }

  render () {
    return (
      <form className='todo__form'
        onSubmit={this.handleSubmit}>
        <input ref={input => input && input.focus()} 
          className='todo__form-input'
          type='text' 
          onChange={this.onChange}
          value={this.state.item} />
        <input
          className='todo__form-add'
          type='submit'
          value='Add'/>
      </form>
    );
  }
}

class TodoApp extends React.Component {
  constructor() {
    super();
    
    this.state = {
      items: [
        'Establish the addition of new tasks in the TODO List',
        'Prevent adding empty elements',
        'Move the focus on the input of a new task at startup. And transferred to the same focus with the addition of each new task to the list',
        'Implement the function of the task complete'
      ]
    };
    
    this.updateItems = this.updateItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  updateItems (newItem) {
    this.setState({
      items: this.state.items.concat(newItem)
    });
  }
    
  deleteItem(item) {
    const deletedItem = this.state.items.splice(this.state.items.indexOf(item), 1);
    const rest = this.state.items;
     
    this.setState(function() {
      return {
        items: rest
      }      
    });
  }

  render () {
    return (
      <div className='todo'>
        <TodoBanner />
        <TodoList items={this.state.items} onSelect={this.deleteItem}/>
        <TodoForm onFormSubmit={this.updateItems}/>
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('container')
);

