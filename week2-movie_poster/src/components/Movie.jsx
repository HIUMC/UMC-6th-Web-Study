import "./movie.css";
import { useState } from "react";

const Movie = ({ title, poster_path, vote_average, overview }) => {
  const [isHovered, setIsHovered] = useState(false);
  const baselink = "https://image.tmdb.org/t/p/w500";
  const posterurl = `${baselink}${poster_path}`;

  return (
    <>
      <div
        className="full"
        onMouseEnter={() => {
          setIsHovered(true);
          console.log("true");
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          console.log("false");
        }}
      >
        <div className="movie">
          <img src={posterurl} alt="" />
          {!isHovered && (
            <div className="title">
              <h3>{title}</h3>
              <h4>{vote_average}</h4>
            </div>
          )}
        </div>
        {isHovered && (
          <div className="hovermovie">
            <h3>{title}</h3>
            <p>{overview}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Movie;
