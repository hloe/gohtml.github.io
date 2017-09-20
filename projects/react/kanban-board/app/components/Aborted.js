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
        <div className='one-button'>
          <button 
            className='btn btn-secondary btn-sm'
            onClick={this.state.props.deleteTask.bind(null, index)} 
          >Delete</button>
        </div>
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
          return item.column === 'aborted';
          }).map(function(item) {
            return <TaskItem {...propsValue} key={item.index} item={item} />
        })}
      </ul>
    );
  }
}

class Aborted extends React.Component {  
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
        <h2 className='text-right subtitle'>Aborted</h2>
        <DoList {...this.props} data={this.state.props} />
      </div>
    );
  }
}

export default Aborted;