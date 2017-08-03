const React = require('react');

const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Home = require('./Home');
const Works = require('./Works');
const Hire = require('./Hire');
const About = require('./About');
const Nav = require('./Nav');
const Footer = require('./Footer');

class App extends React.Component {
  render() {
    return (      
      <Router>
        <div>
          <div className="page-wrapper">
            <Nav data={{
                wrapper: 'wrapper-nav',
                className: 'nav nav_header container',
                addLogo: true,
                childClassName: 'menu header__menu'
              }}
            />     
            <Switch>
              <Route exact path="" component={Home} />
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/works" component={Works} />
              <Route exact path="/about" component={About} />
              <Route exact path="/hire" component={Hire} /> 
            </Switch>
          </div>            
          <Footer />
        </div>
      </Router>      
    );
  }
}


module.exports = App;