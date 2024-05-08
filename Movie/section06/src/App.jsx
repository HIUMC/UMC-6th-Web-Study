import { useState,useRef } from 'react';
import React from 'react';
import './App.css'; 
import { movies } from './api';

const App = () => {
  
  return (
    <div className="app">
      <h1 className='head'>🍿Homefilx🍿</h1>
      <div className="movie-grid">
        {movies.results.map((movie, index) => (
          <div key={index} className="movie-card">
            <div className="container">
              <img className='movie-photo' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
              <div className='overlay'>
                  <div className='text'>{movie.overview}</div>
              </div>
            </div>
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
              <p>Rating: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;