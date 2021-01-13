import React from 'react';
import  MovieCard  from "../../component/MovieCard";

function Favorite() {
  const FavMovies=localStorage.getItem('FavMovies')
  const FavMoviesObj=JSON.parse(FavMovies)
  console.log(FavMoviesObj);
  return <div className="cardWrapper">
    <h3>Favorit Movie</h3>
    {FavMoviesObj?.map((movie)=> <MovieCard movie={movie}/>)}
   
  </div>;
}
export default Favorite;
