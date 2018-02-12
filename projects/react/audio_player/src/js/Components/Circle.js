import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as actionCreators from '../actionCreators';

class Circle extends React.Component {
  constructor() {
    super();
    
    this.state = {
      duration: 0,
      drawInterval: null,
      arc: 0,
      index: 0,
    };
    
    this.updateCanvas = this.updateCanvas.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.duration !== this.state.duration) {      
      const duration = nextProps.duration;
      const interval = nextProps.duration * 1000 / 360;
      
      this.setState({        
        drawInterval: setInterval(function() {
          this.setState({
            arc: this.state.arc + Math.PI / 180,
            duration: this.state.duration + duration / 360,
          });
          console.log('duration:');
          console.log(duration);
          console.log('this.state.arc');
          console.log(this.state.arc);

          console.log('current duration');
          console.log(this.state.duration);

          this.updateCanvas(this.state.arc);
        }.bind(this), interval),
      });
      
    }
    
    // Clear arc when next track starts
    if (nextProps.index !== this.state.index) {
      this.setState({
        index: nextProps.index,
        arc: 0,
        duration: 0,
        drawInterval: clearInterval(this.state.drawInverval),
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      drawInterval: clearInterval(this.state.drawInverval),
    });
  }
  
  updateCanvas(arc) {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.beginPath();
    
    ctx.arc(300, 300, 200, 3 * Math.PI / 2, arc);
        
    ctx.strokeStyle = "white";     
    ctx.stroke();      
  }
  
  render() {
    return (
      {this.state.canvas}
      <canvas ref="canvas" width={600} height={600}/>
    );
  }
}

function mapStateToProps(state) {
  return { 
    index: state.index,
    duration: state.duration,
    currentTime: state.currentTime,
  };
}

//function mapDispatchToProps(dispatch) {
//  return {
//    actionCreators: bindActionCreators(actionCreators, dispatch),
//  };
//}

export default connect(mapStateToProps, null)(Circle);