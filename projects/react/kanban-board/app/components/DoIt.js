import React from 'react';
import DateFormat from './DateFormat';

import * as actionCreators from '../actions/actionCreators';

class TaskItem extends React.Component  {
  constructor(props) {
    super(props);  
        
    this.state = {
      props,
      item: props.item      
    };
  }
  
  
  handleSubmit(e) {
    e.preventDefault();
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
        <small className='date text-right'>{DateFormat(this.state.item.date)}</small>
        <div className='buttons'>
          <button 
            className='btn btn-info btn-sm' 
            onClick={this.state.props.moveTask.bind(null, index, 'do it')}   
          >Move</button>
          <button className='btn btn-outline-info btn-sm'>Edit</button>
          <button 
            className='btn btn-secondary btn-sm' 
            onClick={this.state.props.abortTask.bind(null, index)} 
          >Abort</button>
        </div>    
        <form 
          className='form-group col-12 hidden-xs-up'
          onSubmit={this.handleSubmit}
        > 
          <ul>
            <li>
              <label className='text-muted'>Change task
                <input type='text' placeholder='new task' />
              </label>
            </li>                
            <li>
              <label className='text-muted'>Change priority
                <select name='priority' className='form-control'>
                  <option value='low'>low</option>
                  <option value='normal'>normal</option>
                  <option value='high'>high</option>
                </select>
              </label>
            </li>
            <li className='form-buttons'>
              <input type='submit' className='btn btn-primary' value='Save' />
              <button className='btn btn-secondary'>Cancel</button> 
            </li>
          </ul>
        </form>
      </li> 
    );
  }
}

class DoList extends React.Component {
  constructor(props) {
    super(props);
        
    this.state = {
      props: props.data,
      tasks: props.data.tasks.tasks
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      props: nextProps.data.data,
      tasks: nextProps.data.data.tasks.tasks
    });
  }
  
  render() {
    
    let propsValue = this.state.props;
    
    return(
      <ul>
        {(this.state.tasks).filter(function(item) {
          return item.column === 'do it';
          }).map(function(item) {
            return <TaskItem {...propsValue} key={item.index} item={item} />
        })}
      </ul>
    );
  }
}

class DoIt extends React.Component {  
  constructor(props) {
    super(props);
    
    this.state = {
      props: props.data
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      props: nextProps
    });
  }
  
  render() {
    return(
      <div className='col-12 col-sm-6 col-xl-3 column'>
        <h2 className='text-right subtitle'>Do it</h2>
        <DoList {...this.props} data={this.state.props} />
      </div>
    );
  }
}

export default DoIt;