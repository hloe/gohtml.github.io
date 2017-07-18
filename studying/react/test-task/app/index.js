var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

const data = [
	{ id: 2, name: 'item'},
	{ id: 1, name: 'item'},
	{ id: 0, name: 'item'}
];

class Counter extends React.PureComponent {
  constructor(props) {
    // Pass props to parent class
    super(props);

    // Set initial state
    this.state = {
      count: 0
    }
  }; 

  // Problem is here
  
  handleClick: () => {
    this.setState((prevState) => {
      return {count: prevState.count + 1};
    });
  };  

//Module build failed: SyntaxError: C:/Users/Larysa/Desktop/hloe/studying/react/test-task/app/index.js: Unexpected token, expected : (25:8)
//
//  23 |   
//  24 |   handleClick: () => {
//> 25 |     this.setState((prevState) => {
//     |         ^
//  26 |       return {count: prevState.count + 1};
//  27 |     });
//  28 |   }; 

  render() {
    return (
      <span>{this.state.count}
      <button onClick={this.handleClick}>+</button>
      </span>
    );
  }
}

const ListItem = ({ item }) => (
  <li>{item.id} - {item.name} - <Counter /></li>
);

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