import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { searchMovies } from "../services/api";
import MovieCard from "./MovieCard";
import "./MyComponents.css/MovieSearch.css"; // Import the CSS file

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      return;
    }

    setIsLoading(true);

    try {
      const results = await searchMovies(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const navigateToMovieDetails = (movieId) => {
    history.push(`/movies/${movieId}`);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch} disabled={isLoading}>
          Search
        </button>
      </div>
      {isLoading && <p>Loading...</p>}
      <div className="search-results">
        {searchResults.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => navigateToMovieDetails(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
