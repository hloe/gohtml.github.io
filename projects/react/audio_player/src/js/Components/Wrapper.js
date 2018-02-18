import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actionCreators';

import TrackContainer from './TrackContainer';
import PlayList from './PlayList';

class Wrapper extends React.Component {
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
    });
  }

  render() {
    const index = this.props.index ? this.props.index : 0;
    const [...tracks] = this.props.tracks;

    const { background } = tracks[index];

    const style = {
      background: `url(${background})`,
    };

    return (
        <div className="wrapper" style={style}>
          <div className="container">
            <PlayList
              chooseTrack={this.chooseTrack}
              togglePlayList={this.togglePlayList}
              showPlayList={this.state.showPlayList}
            />          
            <TrackContainer
              chooseTrack={this.chooseTrack}
              nextTrack={this.nextTrack}
              prevTrack={this.prevTrack}
              showContainer={!this.state.showPlayList}
            />
          </div>
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
