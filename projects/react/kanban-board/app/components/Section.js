import React from 'react';
import DoIt from './DoIt';
import InProgress from './InProgress';
import Done from './Done';
import Aborted from './Aborted';

class Section extends React.Component {
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
      <section className='section container'>
        <div className='row'>
          <DoIt data={this.state.props.data} />
          <InProgress data={this.state.props.data} />
          <Done data={this.state.props.data} />
          <Aborted data={this.state.props.data} /> 
        </div>
      </section>   
    );
  }
}
      
export default Section;