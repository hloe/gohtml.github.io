const React = require('react');
const axios = require('axios');
const PropTypes = require('prop-types');
const Link = require('react-router-dom').Link;

class Step1 extends React.Component {
  render() {
      return (
        <h1 className="row justify-content-center">  
          Step 1
        </h1>
      );  
  }
}

module.exports = Step1;