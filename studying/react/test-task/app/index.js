var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

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
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <span>{this.state.count}
      <button onClick={this.handleClick}>+</button>
      </span>
    );
  }
}

const ListItem = ({ item }) => 
<li>{item.id} - {item.name} - <Counter /></li>;

const renderListItem = (item, idx) => (
  <ListItem key={idx} item={item} />
);
    
const List = ({ data }) => (
  <ul>
    {data.map(renderListItem)}
  </ul>
);

const ListContainer = () => (
  <div>
    1. The counter for each item has to work by pressing the "+" button in the element
    <br/ >
    2. When adding a new element, the counter stores in the item that has been created
    <List data={data}/>
  </div>  
);

ReactDOM.render(
  <ListContainer />,
  document.getElementById('container')
);