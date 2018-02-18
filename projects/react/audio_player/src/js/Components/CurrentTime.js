import React from 'react';
import { connect } from 'react-redux';

const sec = 1000;

class CurrentTime extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      isPlaying: true,
      timeInterval: null,
      minutes: 0,
      seconds: 0,
    };

    this.startCounting = this.startCounting.bind(this);
  }

  componentDidMount() {
    this.startCounting();
  }

  componentWillReceiveProps(nextProps) {
    // when track changes
    if (nextProps.index !== this.state.index) {
      this.setState({
        minutes: 0,
        seconds: 0,
        index: nextProps.index,
      });
    }

    // When track is paused or played again
    if (nextProps.isPlaying !== this.state.isPlaying) {
      this.setState({
        isPlaying: nextProps.isPlaying,
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      timeInterval: clearInterval(this.state.timeInterval),
    });
  }

  startCounting() {
    this.setState({
      timeInterval: setInterval(() => {
        if (!this.state.isPlaying) return;

        this.setState({
          seconds: this.state.seconds < 59 ? this.state.seconds + 1 : 0,
          minutes: this.state.seconds !== 59 ? this.state.minutes : this.state.minutes + 1,
        });
      }, sec),
    });
  }

  render() {
    const minutes = this.state.minutes > 9 ? this.state.minutes : `0${this.state.minutes}`;
    const seconds = this.state.seconds > 9 ? this.state.seconds : `0${this.state.seconds}`;

    return (
      <p className="current-time">
        {minutes} : {seconds}
      </p>
    );
  }
}

function mapStateToProps(state) {
  return {
    index: state.index,
    isPlaying: state.isPlaying,
  };
}

export default connect(mapStateToProps, null)(CurrentTime);
