import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actionCreators';

import Tracks from '../Helpers/Tracks';

export class PlayList extends Component {
  constructor() {
    super();
    
    this.chooseTrack = this.chooseTrack.bind(this);
  }
  
  chooseTrack(e) {    
    this.props.actionCreators.setTrack(e.target.id);
    
    this.props.togglePlayList();
  }


  render() {
    if (this.props.showPlayList) {
      return(
        <div>
          <button onClick={this.props.togglePlayList}>Close PlayList</button>
          <ul>
            {Tracks.map((track, index) => (
              <li key={index}>
                <button id={index} onClick={this.chooseTrack}>
                  {track.title}
                  <br />
                  {track.author}
                </button>
              </li>
             ))}
          </ul>     
        </div>
      );      
    }
    
    return(
      <button onClick={this.props.togglePlayList}>Show PlayList</button>
    );
  }
}

function mapStateToProps(state) {
  return { 
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);