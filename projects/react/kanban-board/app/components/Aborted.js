import React from 'react';
import AbortedList from './AbortedList';

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
        <AbortedList {...this.props} data={this.state.props} />
      </div>
    );
  }
}

export default Aborted;