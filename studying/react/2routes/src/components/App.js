const React = require('react');
const ReactRouter = require('react-router-dom');
const Link = require('react-router-dom').Link;
const BrowserRouter = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Step1 = require('./Step1');
const Step2 = require('./Step2');

class App extends React.Component {
  
  render() {
    return(
      <BrowserRouter>
        <div>
            <Route exact path='/' component={Step1} />
            <Route path='/step2' component={Step2}/>
      
          <Link to="/step2">Step 2</Link>
        </div>
            
      </BrowserRouter>        
    );
  }
}

module.exports = App;