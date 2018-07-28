import React from 'react';
import axios from 'axios';

import TestContainer from './TestContainer';

const needAmount = 100;
const perPage = 20;

const movieKey = '8c04f9c1dbf191ee52a0802ddb728004';

export default class FetchData extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      randomMovies: [],
    };

    this.getMovies = this.getMovies.bind(this);
    this.pickMovies = this.pickMovies.bind(this);
    this.setNewTest = this.setNewTest.bind(this);
  }

  componentDidMount() {
    const numberOfRequest = needAmount / perPage;
    for (let page = 1; page <= numberOfRequest; page++) {
      this.getMovies(page);
    }
  }

  getMovies(page) {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${movieKey}&sort_by=popularity&page=${page}`,
    };

    axios(options)
      .then((response) => {
        this.setState({
          movies: this.state.movies.concat(response.data.results),
        }, function () {
          if (this.state.movies.length === 100) { // if we got already 100 movies
            this.pickMovies();
          }
        });
      })
      .catch(errors => console.error(errors));
  }

  pickMovies() {
    const movies = this.state.movies;
    const randomMovies = [];

    while (randomMovies.length < 10) {
      const index = Math.floor(Math.random() * movies.length);
      const picked = movies[index];
      if (movies.indexOf(picked === -1)) {
        randomMovies.push(picked);
      }
    }

    this.setState({
      randomMovies,
    });
  }

  setNewTest() {
    this.setState({
      randomMovies: [],
    }, function() {
      this.pickMovies();
    });
  }

  render() {
    if (this.state.randomMovies.length < 10) return null;

    return (
      <TestContainer
        movies={this.state.movies}
        randomMovies={this.state.randomMovies}
        setNewTest={this.setNewTest}
        changeMovie={this.changeMovie}
      />
    );
  }
}
