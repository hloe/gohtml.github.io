import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actionCreators';

import Tracks from '../Helpers/Tracks';
import WhiteLine from './WhiteLine';

const ShowPlayList = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="#ffffff"><path d="M26 0v4H0V0zM26 8v4H0V8zM26 16v4H0v-4z"/></svg>
);

const ClosePlayList = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21.2" height="21.2" fill="#ffffff"><path d="M-.007 2.835L2.822.007 21.206 18.39l-2.828 2.829z"/><path d="M-.003 18.382L18.382-.003l2.828 2.829L2.826 21.21z"/></svg>
);

class PlayList extends React.Component {
  constructor() {
    super();

    this.chooseTrack = this.chooseTrack.bind(this);
  }

  chooseTrack(e) {
    e.preventDefault();
    
    const index = e.target.dataset.id ? e.target.dataset.id : e.target.id;
    
    this.props.actionCreators.setTrack(index);
    this.props.togglePlayList();
  }


  render() {
    return (
      <nav className="playlist">
        <div className={this.props.showPlayList ? '' : 'hidden'}>
          <WhiteLine />
          <button className="close-playlist" onClick={this.props.togglePlayList}>
            <ClosePlayList />
          </button>
          <ul className="playlist-list">
            {Tracks.map((track, index) => (
              <li className="playlist-item" key={index} id={index} onClick={this.chooseTrack}>
                <p data-id={index} className="track-title">{track.title}</p>
                <br />
                <p data-id={index} className="track-autor">{track.author}</p>
              </li>
             ))}
          </ul>
        </div>

        <button 
          className={this.props.showPlayList ? 'hidden' : 'show-playlist'} 
          onClick={this.props.togglePlayList}
        >
          <ShowPlayList />
        </button>
      </nav>
    );    
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
