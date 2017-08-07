const React = require('react');
const Link = require('react-router-dom').Link;

class Registration extends React.Component {
  constructor () {
    super();
    
    this.state = {
      email: '',
      password: '',
      passwordConfirmed: '',
      messageStyle: 'hidden-xs-up'
    };
    
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handlePasswordConfirmedChanged = this.handlePasswordConfirmedChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleEmailChanged(event) {
    this.setState({ email: event.target.value });
  }
  
  handlePasswordChanged(event) {
   this.setState({ password: event.target.value });
  }
  
  handlePasswordConfirmedChanged(event) {
    this.setState({ passwordConfirmed: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.password !== this.state.passwordConfirmed) {
      alert('Mistake: Passwords do not match');
      this.setState({
        email: '',
        password: '',
        passwordConfirmed: ''
      });
      return;
    }
    
    if (this.state.email === '') {
      alert('Please, fill in your email');
      return;
    }
    
    if (this.state.password === '') {
      alert('Mistake: Password can\'t be empty');
      return;
    }    
    
    // Get data from localStorage
    let users = (localStorage.getItem('users') === null) ? [] : JSON.parse(localStorage.getItem('users'));
    
    // Check whether there is an user with the same email
    if (users !== []) {
      for (let i = 0; i < users.length; i++) {
        if (users[i][0] === this.state.email) {
          alert('User with this email exists already');
          this.setState({
            email: '',
            password: '',
            passwordConfirmed: ''
          });
          return;
        }
      }
    }
     
    // Create an array from new email and password
    let data = [this.state.email, this.state.password];
    
    // Add new user to the array in localStorage
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
    
    this.setState({
        email: '',
        password: '',
        passwordConfirmed: '',
        messageStyle: 'alert alert-success'
      });
    
    return;
  }
  
  render() {
    return(
      <div className="row justify-content-center">  
        <div className="col-md-3">
          <h1 className="h1">Registration</h1>

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
              <input 
                placeholder="Confirm password" 
                type="password" 
                className="form-control" 
                value={ this.state.passwordConfirmed } 
                onChange={this.handlePasswordConfirmedChanged}
              />
            </div>
            <div className="form-group row">
              <button 
                type="submit" 
                className="btn btn-outline-primary btn-lg" 
                onClick={this.handleSubmit}>
                Registration
              </button>
            </div>
          </form>
      
          <p className={this.state.messageStyle}>You have successfully registered. Now you can <Link to="/login">login.</Link></p>

        </div>
      </div>
    );
  }
}

module.exports = Registration;