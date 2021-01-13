import React, { Component } from 'react';
import MovieTitle from '../../component/MovieTitle';
import MovieDetails from '../../component/MovieDetails';
import RelatedMovie from '../../component/RelatedMovie';


class Details extends Component {
    state = {
      isLoaded:false,
      movieData: null,
      movieRelated: [],
    };

  componentDidMount() {
    this.setState({isLoaded:false})
    const { id } = this.props.match.params;
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7cdf7d7de96673cdc912e661988a1435`)
      .then((res) => res.json()).then((result) => {
          this.setState({
            movieData: {
              title: result.title,
              release_date: result.release_date,
              poster_path: `https://www.themoviedb.org/t/p/w1280/${result.poster_path}`,
              description: result.overview,
              genres: result.genres,
              rate: result.vote_average,
              time: result.runtime,
              fullMovieDetails: result,
            },
            isLoaded:true
          });
        }).catch(console.log);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/lists?api_key=7cdf7d7de96673cdc912e661988a1435`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.results);

          this.setState({
            movieRelated:result.results
          });
          
        }
      ).catch(console.log)
      
  }

  render(){
   const isLoaded= this.state.isLoaded
    return (
        <>
      {isLoaded &&
       ( <div>
        <MovieTitle
          title={this.state.movieData.title}
          release_date={this.state.movieData.release_date}
          time={this.state.movieData.time}
          rate={this.state.movieData.rate}
          genres={this.state.movieData.genres}
        />
        <MovieDetails
          poster_path={this.state.movieData.poster_path}
          description={this.state.movieData.description}
          fullMovieDetails={this.state.movieData.fullMovieDetails}
        />
        {this.state.movieRelated.length&&<RelatedMovie movieRelated={this.state.movieRelated}/>}
       
      </div>)
    }
    </>
      
    );
  }
}
export default Details;