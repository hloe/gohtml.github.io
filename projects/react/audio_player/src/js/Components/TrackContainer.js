import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actionCreators';

export class TrackContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      button: true,
    };
    
    this.togglePlay = this.togglePlay.bind(this);    
    this.prevTrack = this.prevTrack.bind(this);
    this.nextTrack = this.nextTrack.bind(this);        
    this.takeDuration = this.takeDuration.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }
  
  togglePlay() {   
    const audio = document.querySelector('audio');
    const method = audio.paused ? 'play' : 'pause';
    audio[method]();
    
    this.setState({
      button: !this.state.button,
    });
  }
  
  prevTrack(e) {
    const val = e.target.id ? +e.target.id : +e.target.value;
    
    if (val > 0) {
      this.props.actionCreators.setTrack(val - 1);
      return;
    }

    this.props.actionCreators.setTrack(this.props.tracks.length - 1);
  }

  nextTrack(e) {
    const val = e.target.id ? +e.target.id : +e.target.value;
    
    if (val < this.props.tracks.length - 1) {
      this.props.actionCreators.setTrack(val + 1);      
      return;
    }

    this.props.actionCreators.setTrack(0);
  }
    
  takeDuration(e) {
    this.props.actionCreators.setTrackDuration(e.target.duration);
  }
  
  handlePause(e) {
    this.props.actionCreators.setCurrentTime(e.target.currentTime);
  }
  
  render() {    
    const index = this.props.index ? this.props.index : 0;
    const tracks = this.props.tracks;
    
    const {
      title, author, source, id,
    } = tracks[index];
            
    return (
      <section>
        <h1>{title}</h1>
        <audio 
          id={id} 
          src={source} 
          autoPlay 
          onPlay={this.takeDuration} 
          onPause={this.handlePause}
          onEnded={this.nextTrack}
        ></audio>
        <button onClick={this.togglePlay}>
          {this.state.button ? 'Pause' : 'Play'}
        </button>     
        <button value={id} onClick={this.prevTrack}>Prev</button>
        <button value={id} onClick={this.nextTrack}>Next</button>      
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { 
    tracks: state.tracks,
    index: state.index,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackContainer);