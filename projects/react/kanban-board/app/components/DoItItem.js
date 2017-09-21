import React from 'react';
import ItemDate from './ItemDate';

class DoItItem extends React.Component  {
  constructor(props) {
    super(props);  
        
    this.state = {
      props,
      item: props.item,
      formVisibility: 'hidden-xs-up',
      description: '',
      priority: props.item.priority
    };
    
        
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleDescriptionChanged = this.handleDescriptionChanged.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  showForm() {
    this.setState({
      formVisibility: 'form-group col-12'
    });
  }
  
  hideForm() {
    this.setState({
      formVisibility: 'hidden-xs-up',
      description: '',
      priority: 'low'
    });
  }
  
  handleDescriptionChanged(event) {
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
    this.hideForm();
    
    if (this.state.description !== '') {
      this.state.props.changeDescriptionAndPriority(this.state.item.index, this.state.description, this.state.priority);
      return null;
    } 
    
    this.state.props.changePriority(this.state.item.index, this.state.priority);
    return null;
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      item: nextProps.item
    });
  }
  
  render () {      
    const {description, date, priority, column, index} = this.state.item;

    let priorStyle = '';
    switch(this.state.item.priority) {
      case 'high':
        priorStyle = 'bg-danger text-white';
        break;
      case 'normal':
        priorStyle = 'bg-warning text-white';
        break;
      default:
        priorStyle = 'bg-success text-white';
        break;
    }

    return(
      <li className={priorStyle}>
        {this.state.item.description}
        <ItemDate data={this.state.item.date} />
        <div className='buttons'>
          <button 
            className='btn btn-info btn-sm' 
            onClick={this.state.props.moveTask.bind(null, index, 'do it')}   
          >Move</button>
          <button 
            className='btn btn-outline-info btn-sm' 
            onClick={this.showForm}
          >Edit</button>
          <button 
            className='btn btn-secondary btn-sm' 
            onClick={this.state.props.abortTask.bind(null, index)} 
          >Abort</button>
        </div>    
        <form 
          className={this.state.formVisibility}
          onSubmit={this.handleSubmit}
        > 
          <ul>
            <li>
              <label className='text-muted'>Change task
                <input 
                  type='text' 
                  placeholder='new task' 
                  value={this.state.description} 
                  onChange={this.handleDescriptionChanged}
                />
              </label>
            </li>                
            <li>
              <label className='text-muted'>Change priority
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
              <input type='submit' className='btn btn-primary' value='Save' />
              <button 
                className='btn btn-secondary' 
                onClick={this.hideForm}
              >Cancel</button> 
            </li>
          </ul>
        </form>
      </li> 
    );
  }
}

export default DoItItem;