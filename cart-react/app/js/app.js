// Create products list
let products = [
  {
    img : 'images/product1.jpg',
    name: 'Product name',
    price: 50,
    quantity: 0,
    visible: false
  },
  {
    img : 'images/product2.jpg',
    name: 'Product name',
    price: 30,
    quantity: 0,
    visible: false
  },
  {
    img : 'images/product3.jpg',
    name: 'Product name',
    price: 20,
    quantity: 0,
    visible: false
  }
];

let ListItem = React.createClass({
    getInitialState: function() {
    return {
      quantity: 0
    };
  },
  
  addToCart: function(event) {
    this.setState({quantity: ++this.state.quantity});
  },
  
  render: function () {
    let img = this.props.data.img,
        name = this.props.data.name,
        price = this.props.data.price;
    
    return (
    {/*}  <div> */}
      <figure>
        <img src={img} alt={name} className="product-img" />
          <figcaption>
            <h3>{name}</h3>
            <span>{price} USD</span>
          </figcaption>
      </figure>
    {/*}  <button onClick={this.addToCart} className="product-button">Add to cart</button>
      </div> */|
      )
    }
});

let List = React.createClass({
  render: function () {
    let data = this.props.data,
        productsList = '';

    if (data.length > 0) {
      productsList = data.map(function (item, index) {
        return (
          <li key={index} className="products-item">
            <ListItem data={item}/>  
            <button onClick={this.addToCart} className="product-button">Add to cart</button>          
          </li>
        )
      })
    }

    return (      
      <ul className="products-list">
      {productsList}
      </ul>
    )
  }
});


ReactDOM.render(<List data={products}/>,
  document.getElementById('products-container')
);

// Create cart
let TableItem = React.createClass({
  
  render: function () {
    let name = this.props.data.name,
        price = this.props.data.price,
        quantity = this.props.data.quantity,
        total = price * quantity;
    
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{total}</td>
      </tr>
    )
  }
});

let Table = React.createClass({
  render: function() {
    let data = this.props.data,
        cartTable = '';
    
    if (data.length > 0) {
      cartTable = data.map(function(item, index) {
        return (
          <TableItem key={index} data={item} />
        )
      })
    }
    
    return (
      <table id="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colSpan="4" className="total">
              Total amount: <span id="totalAmount"></span>USD
            </td>
          </tr>
        </tfoot>
        <tbody>{cartTable}</tbody>
      </table>      
    )
  }
});


ReactDOM.render(<Table data={products}/>,
  document.getElementById('cart')
);

// Change product quantity when clicking button

