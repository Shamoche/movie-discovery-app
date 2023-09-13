import React from "react";
import "./MyComponent.css/MovieCard.css"; // Import the CSS file


const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
