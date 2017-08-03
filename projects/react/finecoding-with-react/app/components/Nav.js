const React = require('react');
const Logo = require('./Logo');
const Menu = require('./Menu');

const AddLogo = (props) => {
  return (
    (props.checkLogo === true) ? <Logo /> : ''
  );
} 

const Nav = (props) => {  
  return(
    <div className={props.data.wrapper}>
      <nav className={props.data.className}>
        <AddLogo checkLogo={props.data.addLogo} />
        <Menu styles={props.data.childClassName} />
      </nav>
    </div>
  );
}
  
module.exports = Nav;