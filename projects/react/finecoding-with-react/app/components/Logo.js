const React = require('react');
const Link = require('react-router-dom').Link;
const Home = require('./Home');

const Logo = () => {
  return(
    <Link className="logo" to="/">
      fine
      <span className="logo_light">coding</span>
      <span className="logo_small">.net</span>      
    </Link>
  );
}

module.exports = Logo;