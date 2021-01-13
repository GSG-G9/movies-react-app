import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

const Movie = ({ movie }) => {
  const history = useHistory();
  return (
    <div className="movieCard">
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}?api_key=7cdf7d7de96673cdc912e661988a1435`}
        alt="Poster"
      />
      <p>{movie.vote_average}</p>
      <p className="card_title" onClick={() => history.push(`/movie/${movie.id}`)}>{movie.title ? movie.title: 'No Title'} </p>
      <button className="cardBtn" type="button">
        Add to list
      </button>
    </div>
  );
};

export default Movie;
