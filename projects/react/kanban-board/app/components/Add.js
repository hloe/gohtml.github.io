import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      props: props.data,
      formVisibility: 'hidden-xs-up',
      description: '',
      priority: 'low'
    };
    
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handlePriority = this.handlePriority.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  showForm() {
    this.setState({
      formVisibility: 'row'
    });
  }
  
  hideForm() {
    this.setState({
      formVisibility: 'hidden-xs-up'
    })
  }
  
  handleDescription(event) {
    this.setState({
      description: event.target.value
    }); 
  }
  
  handlePriority(event) {
    if (event.target.value !== '') {
      this.setState({
        priority: event.target.value
      });
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    this.setState({
      description: '',
      priority: 'low'
    });
    
    this.hideForm();
    if (this.state.description !== '') {
      this.state.props.addTask(this.state.description, this.state.priority);
    }
    return null;
  }
  
  render() {
    return(
      <div>
        <div className='row'>
          <div className='col-12 col-sm-6 offset-sm-6 col-md-3 offset-md-9'>
            <button 
              className='btn btn-outline-primary btn-lg btn-block'
              onClick={this.showForm}
            >Add</button>
          </div>
        </div>

        <div className={this.state.formVisibility}>
          <form 
            className='col-12 col-sm-10 offset-sm-2 col-md-4 offset-md-8 form-group'
            onSubmit={this.handleSubmit}
          >
            <ul>
              <li>
                <label className='text-muted'>Describe your task
                  <input 
                    type='text' 
                    className='form-control' 
                    placeholder='task' 
                    value={this.state.description} 
                    onChange={this.handleDescription}
                  />
                </label>
              </li>
              <li>
                <label className='text-muted'>Priority
                  <select 
                    name='priority' 
                    className='form-control'
                    value={this.state.value} 
                    onChange={this.handlePriority}
                  >
                    <option value='low'>low</option>
                    <option value='normal'>normal</option>
                    <option value='high'>high</option>
                  </select>
                </label>
              </li>
              <li className='form-buttons'>
                <input type='submit' className='btn btn-primary' value='Add' />
                <button 
                  className='btn btn-secondary' 
                  onClick={this.hideForm}
                >Cancel</button>      
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Add;