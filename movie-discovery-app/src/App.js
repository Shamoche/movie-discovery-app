import React from "react";
import "./MyComponent.css"; // Import the CSS file for global styles
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import MovieSearch from "./components/MovieSearch";
import MovieDetails from "./components/MovieDetails";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <Router>
      <div className="Movie-Discovery-app">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={MovieSearch} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
