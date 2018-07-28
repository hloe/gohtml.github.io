import React from 'react';
import TestItem from './TestItem';

export default class TestContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      right: 0,
      all: 0,
    };

    this.countAnswer = this.countAnswer.bind(this);
  }


  countAnswer(isRight) {
    this.setState({
      right: isRight ? this.state.right + 1 : this.state.right,
      all: this.state.all + 1,
    });    
  }

  render() {
    return (
      <section>
        {this.state.all > 0 && <p className="score text-center">{this.state.right}/ 10</p>}
        <h1 className="text-center title">Win movie battle!</h1>
        <div className="container test-container">
          <div className="row justify-content-md-center">          
            {this.props.randomMovies.map((item, index) => (
              <TestItem
                item={item}
                key={index}
                movies={this.props.movies}
                countAnswer={this.countAnswer}
              />
            ))}
            <button 
              onClick={this.props.setNewTest} 
              className="btn btn-primary test-button"
            >Try again</button>
          </div>
        </div>
      </section>
    );
  }
}
