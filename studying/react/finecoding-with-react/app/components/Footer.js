const React = require('react');
const Nav = require('./Nav');

const Footer = () => {
  return(
    <footer className="footer">
      <Nav data={{
        wrapper: 'wrapper-light',
        className: 'nav container',
        addLogo: false,
        childClassName: 'menu footer__menu'
      }}
      />
      <div className="wrapper-dark">
        <p className="footer__text">Copyright &copy; 2017</p>
      </div>
    </footer>
  );
}

module.exports = Footer;