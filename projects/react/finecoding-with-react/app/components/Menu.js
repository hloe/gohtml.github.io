const React = require('react');
const NavLink = require('react-router-dom').NavLink;

const Menu = (props) => {
  return(
    <ul className={props.styles}>
      <li className="menu__item">
        <NavLink exact 
          className="menu__link" 
          activeClassName="menu__link_active"
          to="/"
        >
          home
        </NavLink>
      </li>
      <li className="menu__item">
        <NavLink exact 
          className="menu__link" 
          activeClassName="menu__link_active"
          to="/works"
        >
          works
        </NavLink>
      </li>
      <li className="menu__item">
        <NavLink exact 
          className="menu__link" 
          activeClassName="menu__link_active"
          to="/about"
        >
          about
        </NavLink>
      </li>
      <li className="menu__item">
        <NavLink exact 
          className="menu__link" 
          activeClassName="menu__link_active"
          to="/hire"
        >
          hire me
        </NavLink>    
      </li>
    </ul>    
  );
}

module.exports = Menu;
