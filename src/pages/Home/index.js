import React from 'react';
import Movie from '../../component/MovieCard';
import './style.css';

class Home extends React.Component {
  state = {
    categories: [],
    searchVal: '',
    selectVal: '',
    trending: [], 
    rateVal: 0
  }
  componentDidMount(){
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7cdf7d7de96673cdc912e661988a1435')
      .then((result) => result.json() )
      .then((data) => this.setState({categories: data.genres}));
    
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=7cdf7d7de96673cdc912e661988a1435')
      .then(res => res.json())
      .then(data => this.setState({trending: data.results}))
      
      .catch(err => console.log(err.message));
  }


handleChanges = ({target: {name, value}}) => {
  this.setState({[name]: value})
  console.log(name, value);
}

  categoryRequest = (id) => {
    fetch(``)
  }

  render() {
    
    // const data =  this.state.trending.filter((element) => element.title.includes(this.state.searchVal));
    const rateFilter = this.state.trending.filter(element => element.vote_average >= this.state.rateVal);
    return (
      
      <div>
        <h1>Logo</h1>
        
        <select name="selectVal" id="genre" onChange={this.handleChanges}>
          { this.state.categories.map((genre) => <option value={genre.id}>{genre.name}</option> )}
        </select> 
        <input name="rateVal" type="range" min='0' max='9' onChange={this.handleChanges}/>

        <input type="text" name="searchVal" onChange={this.handleChanges}/>
        
        <div className='cardWrapper'>
          {this.state.trending.filter((element) =>  element.vote_average >= this.state.rateVal && element.original_title? element.original_title.toLowerCase().includes(this.state.searchVal.toLowerCase()): false  ).map(movie => <Movie movie={movie}/>)}
        </div>
      </div>
    );
  }
}
// Function for fetching data from the search bar
// function for fetching data from the select choises
// map on the object of arrays and render cards

export default Home;
