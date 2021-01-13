/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import MovieTitle from '../../component/MovieTitle';
import MovieDetails from '../../component/MovieDetails';
import RelatedMovie from '../../component/RelatedMovie';
import PropTypes from 'prop-types'
class Details extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7cdf7d7de96673cdc912e661988a1435`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            title: result.title,
            release_date: result.release_date,
            poster_path: `https://www.themoviedb.org/t/p/w1280/${result.poster_path}`,
            description: result.overview,
            genres: result.genres,
            rate: result.vote_average,
            time: result.runtime,
            fullMovieDetails: result,
          });
        },

        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const {
      title,
      release_date,
      poster_path,
      description,
      genres,
      rate,
      time,
      fullMovieDetails,
    } = this.state;
    return (
      <div>
        <MovieTitle
          title={title}
          release_date={release_date}
          time={time}
          rate={rate}
          genres={genres}
        />
        <MovieDetails
          poster_path={poster_path}
          description={description}
          fullMovieDetails={fullMovieDetails}
        />
        <RelatedMovie />
      </div>
    );
  }
}
export default Details;
