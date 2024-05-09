import "./Movie.css";
import { useState } from "react";

function Movie({ id, title, vote_average, poster_path, overview }) {
  const [isOver, setOver] = useState(false);
  const onMouseEnter = () => {
    setOver(true);
  };
  const onMouseLeave = () => {
    setOver(false);
  };
  return (
    <div
      className="movie__container"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
        alt="영화 포스터"
        className="poster"
      />
      <div className="movie__info">
        <div className="movie__name">{title}</div>
        <div className="movie__vote">{vote_average}</div>
      </div>
      {isOver ? (
        <>
          <div className="movie__overview">
            <div className="movie__info">
              <div className="movie__name">{title}</div>
            </div>
            {overview.length > 150 ? overview.slice(0, 148) + "..." : overview}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Movie;
