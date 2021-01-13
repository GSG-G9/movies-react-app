import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => {
  const history = useHistory();
  const handelClick = () => {
    const { vote_average, title, poster_path, id } = movie;
    const movieclick = { vote_average, title, poster_path, id };

    const list = JSON.parse(localStorage.getItem('FavMovies')) || [];
    const checkList = list.length
      ? list.filter((ele) => ele.id === id).length == 0
      : true;
    if (checkList) {
      const listMovie = [...list, movieclick];
      localStorage.setItem('FavMovies', JSON.stringify(listMovie));
    } else {
      alert('add to favorite');
    }
  };
  return (
    <div className="movieCard">
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}?api_key=7cdf7d7de96673cdc912e661988a1435`}
        alt="Poster"
      />
      <p>{movie.vote_average}</p>
      <p
        className="card_title"
        onClick={() => history.push(`/movie/${movie.id}`)}
      >
        {movie.title ? movie.title : 'No Title'}
{' '}
      </p>
      <button className="cardBtn" type="button" onClick={handelClick}>
        Add to list
      </button>
    </div>
  );
};
Movie.propTypes = {
  // validation

  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Movie;
