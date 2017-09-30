import React from 'react';
import NavLink from './NavLink';

function Menu(props) {
  return(
    <ul className={props.styles}>
      <li className="menu__item">
        <NavLink 
          to="/home" onlyActiveOnIndex
        >
          home
        </NavLink>
      </li>
      <li className="menu__item">
        <NavLink 
          to="/works"
        >
          works
        </NavLink>
      </li>
      <li className="menu__item">
        <NavLink 
          to="/about"
        >
          about
        </NavLink>
      </li>
      <li className="menu__item">
        <NavLink 
          to="/hire"
        >
          hire me
        </NavLink>    
      </li>
    </ul> 
  );
}

export default Menu;
