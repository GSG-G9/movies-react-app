import React from 'react';
import PropTypes from 'prop-types';
import CaredMovie from '../MovieCard';

function RelatedMovie({ movieRelated }) {
  return (
    <div>
      <h3>Related Movie</h3>
      {movieRelated?.map((row) => (
        <CaredMovie movie={row} key={row.id} />
      ))}
    </div>
  );
}
RelatedMovie.propTypes = {
  // validation

  movieRelated: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RelatedMovie;
