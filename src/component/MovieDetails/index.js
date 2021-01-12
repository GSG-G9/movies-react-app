import React, { Component } from 'react';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // FavoriteMovies: [],
    };
  }

  render() {
    return (
      <div>
        <img src="" alt="MovieImg" />
        <p>description</p>
        <button type="submit">add to favorite </button>
      </div>
    );
  }
}
export default MovieDetails;
