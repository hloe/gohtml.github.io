const React = require('react');
const ReactDOM = require('react-dom');

const api = {
  data: [
    { id: 2, name: "item" },
    { id: 1, name: "item" },
    { id: 0, name: "item" }
  ],
  appendItem() {
    this.data.unshift({
      id: this.data.length,
      name: "item"
    });
  },
  getData() {
    return this.data;
  }
};

class Counter extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  } 

handleClick = () => {
  this.setState((prevState) => ({
    count: prevState.count + 1
  }))
}
  
render() {
    return (
      <span>{this.state.count}
      <button onClick={this.handleClick}>+</button>
      </span>
    );
  }
}
    
const List = ({ data }) => (
  <ul>
    {data.map(function(item) {
      return(
        <li key={item.id}>{item.id} - {item.name} - <Counter key={item.id} /></li>
      );
    })}
  </ul>
);

class ListContainer extends React.Component {
  constructor() {
    super();
    
    this.state = {
      data: api.getData()
    };
  }
  
  onAppendItem = () => {
    api.appendItem();
  
    this.setState({
      data: api.getData()
    });
  };
  
  render() {
    return (
        <div>
          1. The counter for each item has to work by pressing the "+" button in the element
          <br/ >
          2. When adding a new element, the counter stores in the item that has been created
          <List data={this.state.data}/>
          <button onClick={this.onAppendItem}>add item</button>
        </div>  
    );
  }
};

ReactDOM.render(
  <ListContainer />,
  document.getElementById('container')
);