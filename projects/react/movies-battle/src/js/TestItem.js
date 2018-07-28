import React from 'react';
import axios from 'axios';

const gifKey = 'vjXEK8OEnIAQWYEDzAJTjONHIu14fYM2';

const initialStyle = {
  cursor: 'pointer',
};

const successStyle = {
  backgroundColor: 'lightgreen',
  cursor: 'inherit',
};

const mistakeStyle = {
  backgroundColor: 'pink',
  cursor: 'inherit',
};

export default class TestItem extends React.Component {
  constructor() {
    super();

    this.state = {
      rightAnswer: '',
      answers: [],
      src: '',
      style: initialStyle,
      answered: false,
      isRight: undefined,
    };

    this.getAnswers = this.getAnswers.bind(this);
    this.getGif = this.getGif.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  componentDidMount() {
    this.setState({
      rightAnswer: this.props.item.title,
    });

    this.getAnswers();
    this.getGif();
  }

  getAnswers() {
    const rightAnswer = this.props.item.title;
    const movies = this.props.movies.filter(movie => movie.title !== rightAnswer);

    const answers = [rightAnswer];

    while (answers.length < 4) {
      const index = Math.floor(Math.random() * movies.length);
      const picked = movies[index];

      answers.push(picked.title);
    }
    this.setState({
      answers: this.shuffle(answers),
    });
  }

  shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  getGif() {
    const keywords = this.props.item.title.replace(/\s/ig, ',');

    const options = {
      method: 'GET',
      url: `http://api.giphy.com/v1/gifs/search?q=${keywords}&api_key=${gifKey}&limit=1`,
    };

    axios(options)
      .then((response) => {
        this.setState({
          src: response.data.data[0].images.original.url,
        });
      })
      .catch(errors => console.error(errors));
  }

  checkAnswer(e) {
    e.preventDefault();
    if (this.state.answered) return;

    if (e.target.id === this.state.rightAnswer) {
      this.props.countAnswer(true);
      this.setState({
        style: successStyle,
        answered: true,
        isRight: true,
      });
    } else {
      this.props.countAnswer(false);
      this.setState({
        style: mistakeStyle,
        answered: true,
        isRight: false,
      });
    }
  }

  render() {
    return (
      <div className="col-12 col-md-6">
        <img src={this.state.src} alt="guess the movie" className="img img-fluid" />
        <ul className="list-group" style={this.state.style}>
          {this.state.answers.map((item, index) => (
            <ol className="list-group-item" key={index} id={item} onClick={this.checkAnswer}>{item}</ol>
          ))}
        </ul>
      </div>
    );
  }
}
