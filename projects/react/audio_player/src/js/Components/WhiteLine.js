import React from 'react';
import { connect } from 'react-redux';

const coord = {
  x: 0,
  y: 0,
  lineWidth: 440,
  lineHeight: 4,
};

class WhiteLine extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      duration: 0,
      drawInterval: null,
      lineEnd: 0,
      isPlaying: true,
    };

    this.startDrawing = this.startDrawing.bind(this);
    this.updateCanvas = this.updateCanvas.bind(this);
    this.clearCanvas = this.clearCanvas.bind(this);
  }

  componentDidMount() {
    this.startDrawing(this.props.duration, this.props.index);
  }

  componentWillReceiveProps(nextProps) {
    // When track is paused or played again
    if (nextProps.isPlaying !== this.state.isPlaying) {
      this.setState({
        isPlaying: nextProps.isPlaying,
      });
    }

    // When track changes
    if (nextProps.index !== this.state.index) {
      this.setState({
        index: nextProps.index,
        duration: nextProps.duration,
        lineEnd: 0,
        drawInterval: clearInterval(this.state.drawInterval),
      });

      this.clearCanvas();
      this.startDrawing(nextProps.duration, nextProps.index);
    }
  }

  componentWillUnmount() {
    this.setState({
      drawInterval: clearInterval(this.state.drawInverval),
      lineEnd: 0,
    });
  }

  startDrawing(duration, index) {
    const interval = (duration * 1000) / coord.lineWidth;

    this.setState({
      index,
      drawInterval: setInterval(() => {
        this.setState({
          lineEnd: this.state.isPlaying ? this.state.lineEnd + 1 : this.state.lineEnd,
        });
        this.updateCanvas(this.state.lineEnd);
      }, interval),
    });
  }

  clearCanvas() {
    const ctx = this.refs.canvas.getContext('2d');

    ctx.beginPath();
    ctx.clearRect(coord.x, coord.y, coord.lineWidth, coord.lineHeight);
    ctx.closePath();
  }

  updateCanvas(lineEnd) {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.beginPath();

    ctx.moveTo(coord.x, coord.y);
    ctx.lineTo(lineEnd, coord.y);
    ctx.lineWidth = coord.lineHeight;

    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

  render() {
    return (
      <canvas className="white-line" ref="canvas" width={440} height={4}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    index: state.index,
    duration: state.tracks[state.index] ? state.tracks[state.index].duration : 0,
    isPlaying: state.isPlaying,
  };
}

export default connect(mapStateToProps, null)(WhiteLine);
