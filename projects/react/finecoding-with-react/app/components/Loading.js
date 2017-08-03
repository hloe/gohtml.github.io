const React = require('react');
const PropTypes = require('prop-types');

class Loading extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: this.props.text
    }
  }
  
  componentDidMount() {
    let stopper = 'loading' + '...';
    this.interval = window.setInterval(function() {
      if (this.state.text === stopper) {
        this.setState(function() {
          return {
            text: this.props.text
          }
        })
      } else {
        this.setState(function(prevState) {
          return {
            text: prevState.text + '.'
          }
        })
      }
    }.bind(this), this.props.speed)
  }
  
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  
  render () {
    return (
      <div className="section__content wrapper-works">
        <p className="works__title">
          {this.state.text}
        </p>
      </div>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
}

Loading.defaultProps = {
  text: 'loading',
  speed: 300
}

module.exports = Loading;