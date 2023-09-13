import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";
import "./MyComponent.css/MovieDetails.css"; // Import the CSS file

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    getMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or animation.
  }

  return (
    <div className="movie-details">
      <h1 data-testid="movie-title">{movie.title}</h1>
      <p data-testid="movie-release-date">
        Release Date (UTC): {movie.release_date}
      </p>
      <p data-testid="movie-runtime">Runtime: {movie.runtime} minutes</p>
      <p data-testid="movie-overview">{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
