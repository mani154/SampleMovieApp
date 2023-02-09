import React from 'react';
import './MovieTile.css';


const MovieTile = props => {

  const { Title, Year, imdbID, Type, Poster } = props.movie;

  const onClickMovieTile = () => {
    props.setSelectedMovie(imdbID);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="MovieContainer" onClick={onClickMovieTile}>
      <img className="CoverImage" src={Poster} alt={Title}/><br />
      <span className="MovieName">{Title}</span>
      <div className="InfoColumn">
        <span className="MovieInfo">Year: {Year}</span>
        <span className="MovieInfo">Type: {Type}</span>
      </div>
    </div>
  )
}

export default MovieTile;