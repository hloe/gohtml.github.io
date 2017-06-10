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
  render: function () {
    let img = this.props.data.img,
        name = this.props.data.name,
        price = this.props.data.price;
    
    return (
      <figure>
        <img src={img} alt={name} className="product-img" />
          <figcaption>
            <h3>{name}</h3>
            <span>{price} USD</span>
          </figcaption>
      </figure>
      )
    }
});


  
let List = React.createClass({  
  
  addToCart: function (index) {  
    ++products[index].quantity;
    products[index].visible = true;
    ReactDOM.render(<Table data={products}/>,
                    document.getElementById('cart')
    );
  },
  
  render: function () {
    let data = this.props.data,
        productsList = '';
    

    if (data.length > 0) {
      productsList = data.map(function (item, index) {        
        return (
          <li key={index} className="products-item">
            <ListItem data={item}/>  
            <button onClick={this.addToCart.bind(this, index)} className="product-button">Add to cart</button>       
          </li>
        )
      }, this)
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
  minusProduct: function () {
    let index = this.props.data;
    --products[index].quantity;    
    if (products[index].quantity === 0) {
      products[index].visible = false;
    }
    ReactDOM.render(<Table data={products}/>,
                    document.getElementById('cart')
    );
  },
  
  plusProduct: function() {
    let index = this.props.data;
    ++products[index].quantity;    
    ReactDOM.render(<Table data={products}/>,
                    document.getElementById('cart')
    );
  },
  
  deleteProduct: function() {
    let index = this.props.data;
    products[index].quantity = 0;
    products[index].visible = false;
    ReactDOM.render(<Table data={products}/>,
                    document.getElementById('cart')
    );
  },
  
  render: function () {
      let index = this.props.data,
          name = products[index].name,
          price = products[index].price,
          visible = products[index].visible,
          quantity = products[index].quantity,
          total = price * quantity;
    
    return (
      <tr className={visible === true ? '':'hidden'}>
        <td>{name}</td>
        <td>{price}</td>
        <td><span onClick={this.minusProduct.bind(this, index)}>-</span>{quantity}<span onClick={this.plusProduct.bind(this, index)}>+</span></td>
        <td>{total}</td>
        <td><span onClick={this.deleteProduct.bind(this, index)}>-</span></td>
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
          <TableItem key={index} data={index} />
        )
      })
    }
    
    let totatAmount = 0;
    
    for (let i = 0; i < data.length; i++) {
      totatAmount = totatAmount + data[i].price * data[i].quantity;
    }
    
    return (
      <table id="cart-table" className={totatAmount > 0 ? '':'hidden'}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th colSpan="2">Total price</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colSpan="5" className="total">
              Total amount: <span id="totalAmount">{totatAmount} </span>USD
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
