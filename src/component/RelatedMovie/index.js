import React from 'react';
import CaredMovie from '../MovieCard'
function RelatedMovie(props) {
  console.log(props.movieRelated);

  return (
    <div>
      {props.movieRelated.map((row) => (
        <p>{row.descrption}</p>
      ))}

      <h3>Related Movie</h3>
      <img src="" alt="MovieImg" />
      <img src="" alt="MovieImg" />
      <img src="" alt="MovieImg" />
      <img src="" alt="MovieImg" />
    </div>
  );
}

export default RelatedMovie;
