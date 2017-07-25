const React = require('react');
const Link = require('react-router-dom').Link;

class Login extends React.Component {
  constructor () {
    super();
    
    this.state = {
      email: '',
      password: '',
      messageStyle: 'hidden-xs-up'
    };
    
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleEmailChanged(event) {
    this.setState({ email: event.target.value });
  }
  
  handlePasswordChanged(event) {
   this.setState({ password: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.email === '') {
      alert('Please fill in your email');
      return;
    }
    
    if (this.state.password === '') {
      alert('Please fill in your password');
      return;
    }
      
    // Get data from localStorage
    let users = (localStorage.getItem('users') === null) ? [] : JSON.parse(localStorage.getItem('users'));
    
    if (users === []) {
      alert('You are not registred');        
      return;
    }
    

    // Get user's index
    let index = -1;
    for (let i = 0; i < users.length; i++) {
      if (users[i][0] === this.state.email) {
        index = i;
        if (users[i][1] !== this.state.password) {
          alert('Wrong password');
          this.setState({
            password: ''
          });
          return;
        } 
      }
    }
            
    if (index === -1) {
      alert('User with this email does not exist');
      this.setState({
        email: '',
        password: ''
      });
      return;
    }
    
    // Set status 'isAuth' in localStorage
    localStorage.setItem('isAuth', JSON.stringify(true));
    
    return this.setState({
      email: '',
      password: '',
      messageStyle: 'alert alert-success'
    });
  }
  
  render() {
    return(
      <div className="row justify-content-center">  
        <div className="col-md-3">
          <h1 className="h1">Login</h1>

          <form>
            <div className="form-group row">
              <input 
                placeholder="Email" 
                type="email" 
                className="form-control" 
                value={ this.state.email } 
                onChange={this.handleEmailChanged}
              />
            </div>
            <div className="form-group row">
              <input 
                placeholder="Password" 
                type="password" 
                className="form-control" 
                value={ this.state.password }
                onChange={this.handlePasswordChanged}
              />
            </div>
            <div className="form-group row">
              <button 
                type="submit" 
                className="btn btn-outline-primary btn-lg" 
                onClick={this.handleSubmit}>
                Login
              </button>
            </div>
          </form>
      
          <p className={this.state.messageStyle}>You have successfully registered. Now you can <Link to="/users">see section 'Users'.</Link></p>

        </div>
      </div>
    );
  }
}

module.exports = Login;