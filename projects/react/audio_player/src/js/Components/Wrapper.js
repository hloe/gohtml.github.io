import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actionCreators';

import TrackContainer from './TrackContainer';
import PlayList from './PlayList';
import Circle from './Circle';

export class Wrapper extends Component {
    constructor() {
    super();

    this.state = {
      showPlayList: false,
    };
        
    this.togglePlayList = this.togglePlayList.bind(this);
  }
  
  togglePlayList() {
    this.setState({
      showPlayList: !this.state.showPlayList,
    })
  }
    
  render() {
    const index = this.props.index ? this.props.index : 0;
    const tracks = this.props.tracks;
    
    const {background} = tracks[index];
            
    const style = {
      background: `url(${background})`,
      backgroundColor: '#343434',
      color: '#fff',      
    };        
    
    return(
        <div style={style}>
          <PlayList 
            chooseTrack={this.chooseTrack} 
//            activeTrack={Tracks[this.state.index]} 
            togglePlayList={this.togglePlayList} 
            showPlayList={this.state.showPlayList}
          />
          <Circle />
          <TrackContainer
            chooseTrack={this.chooseTrack} 
            nextTrack={this.nextTrack}
            prevTrack={this.prevTrack}
//            activeTrack={Tracks[this.state.index]} 
          />
        </div>      
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

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);