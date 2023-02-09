import { useState } from 'react';
import axios from 'axios';
import MovieTile from './components/MovieTile';
import ShowMovieInfo from './components/ShowMovieInfo';
import './App.css';

export const API_KEY = "46ac5229";

const App = (props) => {

  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [timeoutId, setTimeoutId] = useState();

  const fetchMovieDetails = async searchText => {
    const res = await axios.get(`https://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}`);
    setMovieList(res.data.Search);
  };

  const onTextChange = event => {
    const searchText = event.target.value;
    setSelectedMovie("");
    clearTimeout(timeoutId);
    setSearchText(searchText);
    setTimeoutId(setTimeout(() => fetchMovieDetails(searchText), 500));
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
