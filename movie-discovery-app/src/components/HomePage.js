import React, { useState, useEffect } from "react";
import { fetchTopMovies } from "../services/api";
import MovieCard from "./MovieCard";
import "./MyComponent.css/HomePage.css"; // Import the CSS file

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const getTopMovies = async () => {
      try {
        const movies = await fetchTopMovies();
        setTopMovies(movies);
      } catch (error) {
        console.error("Error fetching top movies:", error);
      }
    };

    getTopMovies();
  }, []);

  return (
    <div>
      <h1>Top 10 Movies</h1>
      <div className="movie-grid">
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
