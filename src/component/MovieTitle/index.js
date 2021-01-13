import React from 'react';
import PropTypes from 'prop-types';

function MovieTitle({ title, rate, time, genres, release_date: releaseDate }) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <h2>{rate}</h2>
      </div>
      <ul>
        <li key="time">{time}</li>
        <li key="name">
          {genres?.map((row) => (
            <span key={row.id}>{row.name}</span>
          ))}
        </li>
        <li key="date">{releaseDate}</li>
      </ul>
    </div>
  );
}
MovieTitle.propTypes = {
  // validation
  title: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  release_date: PropTypes.string.isRequired,
};
export default MovieTitle;
