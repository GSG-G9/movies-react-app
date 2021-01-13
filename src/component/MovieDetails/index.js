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
  handelClick =()=>{

    const {vote_average,title,poster_path,id}=this.props.fullMovieDetails
   const movie={vote_average,title,poster_path,id}
   
   let list = JSON.parse(localStorage.getItem('FavMovies'))||[]
   console.log(list);
   const checkList=list.length?list.filter((ele)=>ele.id===id).length==0 :true
   if(checkList){
     const listMovie=[...list,movie]
  localStorage.setItem('FavMovies', JSON.stringify(listMovie))
  console.log(JSON.parse(localStorage.getItem('FavMovies')));
  
   }else{
     alert ('add to favorite')
   }};
  render() {
    console.log(this.state.FavoriteMovies);
    return (
      <div>
        <img src={this.props.poster_path} alt="MovieImg" width="200" />
        <p>{this.props.description}</p>
        <button  onClick={this.handelClick}>add to favorite </button>
      </div>
    );
  }
};
export default MovieDetails;
