const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Registration = require('./Registration');
const Login = require('./Login');
const Users = require('./Users');
const Nav = require('./Nav');


class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Nav />

          <Switch>
            <Route exact path='/' component={Registration} />
            <Route path='/registration' component={Registration} />
            <Route path='/login' component={Login} />
            <Route path='/users' component={Users} />  
            <Route render={function () {
              return <Registration />
            }} />
          </Switch>
        </div>
      </Router>        
    );
  }
}

module.exports = App;