const React = require('react');
const axios = require('axios');
const PropTypes = require('prop-types');
const Link = require('react-router-dom').Link;

function Tbody(props) {
  return(
    <tbody>
      { props.data.map(function(item, index) {
        return (
          <tr key={index}>
            <td>{ item.name }</td>
            <td>{ item.email }</td>
            <td>{ item.phone }</td>
          </tr>
        );
      }) }
    </tbody>
  );
}

Tbody.PropTypes = {
  data: PropTypes.array.isRequired,
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data:[]
    };
    this.apiUrl = 'https://jsonplaceholder.typicode.com/users';    
  }
  
  componentDidMount() {
    axios.get(this.apiUrl)
      .then((result) => {
        this.setState({ 
          data: result.data 
        });
      });
  }
  
  render() {
    let isAuth = (localStorage.getItem('isAuth') === null) ? false : JSON.parse(localStorage.getItem('isAuth'));
    if (isAuth === true) {
      return (
        <div className="row justify-content-center">  
          <div className="col-md-6">
            <h1 className="h1">Users</h1>

            <table className="table table-bordered table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <Tbody data= { this.state.data } />
            </table>

          </div>
        </div>
      );
    } else {
      return (
        <div className="row justify-content-center">  
          <div className="col-md-6">
            <h1>Access denied</h1>
            <p className="alert alert-warning"><Link to="/registration">Register</Link> and <Link to="/login">login</Link> for browsing this section.</p>
          </div>
        </div>
      );
    }
      
    
  }
}

module.exports = Table;