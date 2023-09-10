import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import searchIcon from "./search.svg";

// d2394f43

const API_KEY = "https://www.omdbapi.com?apikey=d2394f43";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const responce = await fetch(`${API_KEY}&s=${title}`);
    const data = await responce.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1>M.O.VI.N.F.O</h1>
      <div className="search">
        <input
          placeholder="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
