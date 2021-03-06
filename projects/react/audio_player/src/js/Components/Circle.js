import React from 'react';
import { connect } from 'react-redux';

const coord = {
  x: 220 + 1,
  y: 220 + 1,
  radius: 220,
  arcStart: 1.5 * Math.PI,
};

class Circle extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      duration: 0,
      drawInterval: null,
      arc: 1.5 * Math.PI,
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
        arc: 1.5 * Math.PI,
        drawInterval: clearInterval(this.state.drawInterval),
      });

      this.clearCanvas();
      this.startDrawing(nextProps.duration, nextProps.index);
    }
  }

  componentWillUnmount() {
    this.setState({
      drawInterval: clearInterval(this.state.drawInverval),
    });
  }

  startDrawing(duration, index) {
    const interval = (duration * 1000) / 360;

    this.setState({
      index,
      drawInterval: setInterval(() => {
        this.setState({
          arc: this.state.isPlaying ? this.state.arc + (Math.PI / 180) : this.state.arc,
        });
        this.updateCanvas(this.state.arc);
      }, interval),
    });
  }

  clearCanvas() {
    const ctx = this.refs.canvas.getContext('2d');

    ctx.beginPath();
    ctx.clearRect(coord.x - coord.radius - 3, coord.y - coord.radius - 3, (coord.radius * 2) + 6, (coord.radius * 2) + 6);
    ctx.closePath();
  }

  updateCanvas(arcEnd) {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.beginPath();

    ctx.arc(coord.x, coord.y, coord.radius, coord.arcStart, arcEnd);

    ctx.lineWidth = 4;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

  render() {
    return (
      <canvas className="circle" ref="canvas" width={444} height={444}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    index: state.index,
    duration: state.tracks[state.index].duration,
    isPlaying: state.isPlaying,
  };
}

export default connect(mapStateToProps, null)(Circle);
