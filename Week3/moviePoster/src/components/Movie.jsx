import React from "react";
import "./Movie.css";

export function Movie({ posterPath, title, vote_average, overview }) {
  return (
    <>
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original/${posterPath}`}
          alt={title}
        />
        <div className="movie-info">
          <h5 className="title">{title}</h5>
          <p className="vote_average">{vote_average}</p>
        </div>
        {/* mouse hover */}
        <div className="overview-hover">
          <h3>{title}</h3>
          <span>{overview}</span>
        </div>
      </div>
    </>
  );
}
