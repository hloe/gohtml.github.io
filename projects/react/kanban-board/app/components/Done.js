import React from 'react';
import DoneList from './DoneList';

class Done extends React.Component {  
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
        <h2 className='text-right subtitle'>Done</h2>
        <DoneList {...this.props} data={this.state.props} />
      </div>
    );
  }
}

export default Done;