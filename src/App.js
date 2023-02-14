import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieTile from './components/MovieTile';
import ShowMovieInfo from './components/ShowMovieInfo';
import './App.css';

export const API_KEY = "46ac5229";

const App = (props) => {

  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [sortConfig, setSortConfig] = useState({
    isSortByNewest: true,
    buttonText: 'Newest'
  });

  const sortMovieList = movieList => {
    if(!movieList) {
      return movieList;
    }
    return movieList.sort((movie1, movie2) => (parseInt(movie1.Year) <= parseInt(movie2.Year)) ? 1 : -1)
  };

  const fetchMovieDetails = async searchText => {
    const res = await axios.get(`https://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}`);
    setMovieList(sortMovieList(res.data.Search));
  };

  const onTextChange = async event => {
    const searchText = event.target.value;
    setSelectedMovie("");
    setSearchText(searchText);
    await fetchMovieDetails(searchText);
  }

  const onSortButtonClick = () => {
    setSortConfig({
      isSortByNewest: !sortConfig.isSortByNewest,
      buttonText: sortConfig.isSortByNewest ? 'Newest' : 'Oldest'
    });
    setMovieList(movieList.reverse());
  }

  return (
    <div className="Container">
      <div className="Header">
        <div className="AppName">
          <img className="MovieImage" src="movie-icon.png" alt={""} />
          GetMovieInfo
        </div>
        <div className="SearchBox">
          <img className="SearchIcon" src="search-icon.png" alt={""} />
          <input className="SearchInput" placeholder="Search a Movie by name" value={searchText} onChange={onTextChange} />
        </div>
        <div className="Sort">
          Sort By: <br /><button className="SortButton" onClick={onSortButtonClick} disabled={movieList?.length <= 0}>{sortConfig.buttonText}</button>
        </div>
      </div>
      {selectedMovie && <ShowMovieInfo selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
      <div className="MovieListContainer">
        {movieList?.length 
          ? movieList.map((movie, idx) => <MovieTile key={idx} movie={movie} setSelectedMovie={setSelectedMovie} />)
          : <img className="ImagePlaceholder" src="movie-icon.png" alt={""} />}
      </div>
    </div>
  );
}

export default App;
