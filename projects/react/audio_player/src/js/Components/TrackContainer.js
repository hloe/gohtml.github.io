import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actionCreators';

import Circle from './Circle';
import CurrentTime from './CurrentTime';

const Prev = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="18" fill="#ffffff"><path d="M36 17L18 9l18-8z"/><path d="M20 17L2 9l18-8z"/><path d="M4 18H0V0h4z"/></svg>
);

const Next = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="18" fill="#ffffff"><path d="M0 17l18-8L0 1z"/><path d="M16 17l18-8-18-8z"/><path d="M32 0h4v18h-4z"/></svg>
);

const PlayPause = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="18" fill="#ffffff"><path d="M0 17l18-8L0 1zM26 0h4v18h-4zM34 0h4v18h-4z"/></svg>
);

class TrackContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      isPlaying: true,
    };

    this.togglePlay = this.togglePlay.bind(this);
    this.prevTrack = this.prevTrack.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.index !== this.state.index) {
      this.setState({
        button: true,
        index: nextProps.index,
      });
    }
  }

  togglePlay() {
    const audio = document.querySelector('audio');
    const method = audio.paused ? 'play' : 'pause';
    audio[method]();

    this.setState({
      isPlaying: !this.state.isPlaying,
    });

    this.props.actionCreators.setIsPlaying(this.state.isPlaying);
  }

  prevTrack(e) {
    e.preventDefault();
    
    if (this.state.index > 0) {
      this.props.actionCreators.setTrack(this.state.index - 1);
      return;
    }

    this.props.actionCreators.setTrack(this.props.tracks.length - 1);
  }

  nextTrack(e) {
    e.preventDefault();
    
    if (this.state.index < this.props.tracks.length - 1) {
      this.props.actionCreators.setTrack(this.state.index + 1);
      return;
    }

    this.props.actionCreators.setTrack(0);
  }

  render() {
    const index = this.props.index ? this.props.index : 0;
    const [...tracks] = this.props.tracks;

    const {
      title, author, source, id,
    } = tracks[index];

    return (
      <section className={this.props.showContainer ? 'track-container' : 'hidden'}>
        <Circle />
        <div className="track-description">
          <CurrentTime />
          <h1 className="title">{title}</h1>
          <p className="subtitle">{author}</p>   
        </div>
        <audio
          id={id}
          src={source}
          autoPlay
          onEnded={this.nextTrack}
        ></audio>
        <button className="button-play" onClick={this.togglePlay}>
          <PlayPause />
        </button>
        <button className="button-prev" value={id} onClick={this.prevTrack}>
          <Prev />
        </button>
        <button className="button-next" value={id} onClick={this.nextTrack}>
          <Next />
        </button>
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
