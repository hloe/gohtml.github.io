import React from 'react';
import NavLink from './NavLink';
import Logo from './Logo';
import Footer from './Footer';


//const ReactRouter = require('react-router-dom');
//const Router = ReactRouter.BrowserRouter;
//const Route = ReactRouter.Route;
//const Switch = ReactRouter.Switch;

//import Home from './Home';
//import Nav from './Nav';
//import Footer from './Footer';

//class App extends React.Component {
//  render() {
//    return (      
//      <Router>
//        <div>
//          <div className="page-wrapper">
//            <Nav data={{
//                wrapper: 'wrapper-nav',
//                className: 'nav nav_header container',
//                addLogo: true,
//                childClassName: 'menu header__menu'
//              }}
//            />           
//            <Switch>              
//              <Route exact path="/home" component={Home} />
//              <Route path="/works" component={Works} />
//              <Route path="/about" component={About} />
//              <Route path="/hire" component={Hire} /> 
//              <Route component={Home} />
//            </Switch> 
//          </div>            
//          <Footer />
//        </div>
//      </Router>      
//    );
//  }
//}

class App extends React.Component {
  
  render() {
    return(
      <div>
        <div className="page-wrapper">  
          <div className='wrapper-nav'>
            <nav className='nav nav_header container'>
              <Logo />
              <ul role="nav" className='menu header__menu'>
                <li>
                  <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/works">Works</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/hire">Hire</NavLink>
                </li>      
              </ul>
            </nav>
          </div>  
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;