import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

const movie = {
  adult: false,
  backdrop_path: '/cw8A0SprTxr7uSfcH7lwSRRhezJ.jpg',
  genre_ids: [12, 14, 28],
  id: 634244,
  original_language: 'en',
  original_title: "Heavenquest: A Pilgrim's Progress",
  popularity: 725.041,
  poster_path: '/cLDPLia17AwMqSaRHccyAlInkch.jpg',
  release_date: '2020-07-13',
  title: "Heavenquest: A Pilgrim's Progress",
  video: false,
  vote_average: 5.4,
};

const Movie = () => {
  const history = useHistory();
  return (
    <div className="movieCard">
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}?api_key=7cdf7d7de96673cdc912e661988a1435`}
        alt="Poster"
      />
      <p>{movie.vote_average}</p>
      <button
        type="button"
        className="cardTitle"
        onClick={() => history.push(`/movie/${movie.id}`)}
      >
        <p>{movie.title}</p>
      </button>

      <button className="cardBtn" type="button">
        Add to list
      </button>
    </div>
  );
};

export default Movie;
