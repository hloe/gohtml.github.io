import React from 'react';
import ItemDate from './ItemDate';

class AbortedItem extends React.Component  {
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
        <ItemDate data={this.state.item.date} />
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

export default AbortedItem;