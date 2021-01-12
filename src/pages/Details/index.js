import React, { Component } from 'react';
import MovieTitle from '../../component/MovieTitle';
import MovieDetails from '../../component/MovieDetails';
import RelatedMovie from '../../component/RelatedMovie';

class Details extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <MovieTitle />
        <MovieDetails />
        <RelatedMovie />
      </div>
    );
  }
}
export default Details;
