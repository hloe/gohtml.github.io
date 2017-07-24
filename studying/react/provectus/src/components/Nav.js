const React = require('react');
const NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <nav className="row navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <ul className="col-md-4 offset-md-1 navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/registration">Registration</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link disabled" to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  )
}


module.exports = Nav;