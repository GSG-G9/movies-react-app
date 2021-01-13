import React from 'react';
import Movie from '../../component/MovieCard';
import './style.css';

class Home extends React.Component {
  state = {
    categories: [],
    searchVal: '',
    selectVal: '',
    trending: [], 
    rateVal: 0,
    searchByMovie: [],
    showTrending: true,
  }
  componentDidMount(){
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7cdf7d7de96673cdc912e661988a1435')
      .then((result) => result.json() )
      .then((data) => this.setState({categories: data.genres}));
    
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=7cdf7d7de96673cdc912e661988a1435')
      .then(res => res.json())
      .then(data =>{
        this.setState({trending: data.results})
        this.setState({showTrending:true});
      })
      .catch(err => console.log(err.message));
  }

searchByMovieName = (event) => {this.setState({searchByMovie: event.target.value})};

fetchMovie = (event) => {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=7cdf7d7de96673cdc912e661988a1435&query=${this.state.searchVal}`)
    .then(res => res.json())
    .then(data => {
      this.setState({searchByMovie: data.results});
      this.setState({showTrending:false}); 
    })
};

handleChanges = ({target: {name, value}}) => {
  this.setState({[name]: value})
}

  categoryRequest = (id) => {
    fetch(``)
  }

  render() {
    const movieData = !this.state.showTrending? this.state.searchByMovie : this.state.trending;
    return (
      <div>
        <div className="search_bar">
          <div className="">
            <select className="slct" name="selectVal" id="genre" onChange={this.handleChanges}>
                { this.state.categories.map((genre) => <option value={genre.id}>{genre.name}</option> )}
              </select>
              <input className="search_input" type="text" placeholder="Enter Movie name" value= {this.state.searchVal} name="searchVal"  onChange={this.handleChanges}/> 
              <button className="btn" type="button" onClick={this.fetchMovie}>Search for Movie</button>
              <button className="btn danger" type="button" onClick= {() => this.setState({showTrending: false, searchVal: '',
              searchByMovie: [],
              showTrending: true
              })}>Clear</button>

            </div>
            <div>
              <p>Filter By rate</p>
              <input  name="rateVal" type="range" min='0' max='9' onChange={this.handleChanges}/>
            </div>
        </div>
       
        <div className='cardWrapper'>
         
          { (movieData ).filter((element) =>  element.vote_average >= this.state.rateVal && element.original_title? element.original_title.toLowerCase().includes(this.state.searchVal.toLowerCase()): false  ).map(movie => <Movie movie={movie}/>)}
          
        </div>
      </div>
    );
  }
}
export default Home;
