/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React from 'react';

function MovieTitle(props) {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <h2>{props.rate}</h2>
      </div>
      <ul>
        <li key="time">{props.time}</li>
        <li key="name">
          {props.genres?.map((row) => (
            <span key={row.id}>{row.name}</span>
          ))}
        </li>
        <li key="date">{props.release_date}</li>
      </ul>
    </div>
  );
}
export default MovieTitle;
