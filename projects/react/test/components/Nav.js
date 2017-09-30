import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

function AddLogo(props) {
  return (
    (props.checkLogo === true) ? <Logo /> : ''
  );
} 

function Nav(props) {  
  return(
    <div className={props.data.wrapper}>
      <nav className={props.data.className}>
        <AddLogo checkLogo={props.data.addLogo} />
        <Menu styles={props.data.childClassName} />
      </nav>
    </div>
  );
}
  
export default Nav;