import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../App';
import './ShowMovieInfo.css';

const getMovieInfo = selectedMovie => axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`);

const ShowMovieInfo = props => {

  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie, setSelectedMovie } = props;

  

  useEffect(() => {
    getMovieInfo(selectedMovie).then(res =>
    setMovieInfo(res.data));
  }, [selectedMovie]);

  return (
    <div className="Container">
      {movieInfo ? (
      <>
        <img className="CoverImage" src={movieInfo?.Poster} alt={movieInfo?.Title} />
        <div className="InfoColumn">
          <span className="MovieName">{movieInfo.Type}: <span>{movieInfo.Title}</span></span>
          <span className="MovieInfo">Genre: <span>{movieInfo.Genre}</span></span>
          <span className="MovieInfo">Release Year: <span>{movieInfo.Released}</span></span>
          <span className="MovieInfo">
            Plot: 
            <span>{movieInfo.Plot}</span>
          </span>
        </div>
        <span className="Close" onClick={() => setSelectedMovie()}>Close Info</span>
      </>
      ): ("Loading Movie Info...")}
    </div>
  )
};

export default ShowMovieInfo;