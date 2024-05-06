import { useState } from "react";
import "./Poster.css";

function Poster({ title, overview, posterPath, vote }) {
  const path = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <div className="Poster">
      <div className="hover">
        <p className="bold">{title}</p>
        <p className="overview">{overview}</p>
      </div>
      <img src={path} alt="" />
      <div className="text">
        <div className="title">{title}</div>
        <div className="vote">{vote}</div>
      </div>
    </div>
  )
}

export default Poster;