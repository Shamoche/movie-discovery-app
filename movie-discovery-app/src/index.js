import React from "react";
import ReactDOM from "react-dom";import homepageStyles from "./MyComponent.css/HomePage.css"; // Use a different variable name
import movieCardStyles from "./MyComponent.css/MovieCard.css"; // Use a different variable name
import movieDetailsStyles from "./MyComponent.css/MovieDetails.css"; // Use a different variable name
import movieSearchStyles from "./MyComponent.css/MovieSearch.css"; // Use a different variable name




import App from "./App"; // Your main component goes here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
