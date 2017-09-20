import React from 'react';

import Header from './Header';
import Section from './Section';

class Main extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      props
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      props: nextProps
    });
  }
  
  render() {
    return(
      <div className='wrapper'>
        <Header data={this.state.props} />
        <Section data={this.state.props} />   
      </div>
    );
  }
}


export default Main;