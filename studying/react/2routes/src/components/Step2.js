const React = require('react');
const Link = require('react-router-dom').Link;

class Step2 extends React.Component {  
  render() {
    return(
      <div className="row justify-content-center">        
        <h1>Step 2</h1>
      <p>
        <Link to="/">Step 1</Link>
      </p>
      </div>
    );
  }
}

module.exports = Step2;