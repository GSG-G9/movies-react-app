/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FavoriteMovies: [],
    };
  }
 handelClick = ()=>{
  
  const {FavoriteMovies}=this.state
  const list =[...FavoriteMovies,this.props.fullMovieDetails]
  this.setState({
    FavoriteMovies:list,
  })
}
  render() {
    console.log(this.state.FavoriteMovies);
    return (
      <div>
        <img src={this.props.poster_path} alt="MovieImg" />
        <p>{this.props.description}</p>
        <button type="submit" onClick={this.handelClick}>add to favorite </button>
      </div>
    );
  }
}
export default MovieDetails;
