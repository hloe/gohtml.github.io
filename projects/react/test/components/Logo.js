import React from 'react';
import { Link } from 'react-router';
import Home from './Home';

function Logo() {
  return(
    <Link className="logo" to="/">
      fine
      <span className="logo_light">coding</span>
      <span className="logo_small">.net</span>      
    </Link>
  );
}

export default Logo;