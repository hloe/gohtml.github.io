import React from 'react';
import AbortedItem from './AbortedItem';

class AbortedList extends React.Component {
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
          }).sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).map(function(item) {
            return <AbortedItem {...propsValue} key={item.index} item={item} />
        })}
      </ul>
    );
  }
}

export default AbortedList;