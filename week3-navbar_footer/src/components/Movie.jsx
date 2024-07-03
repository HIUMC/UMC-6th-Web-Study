import "./Movie.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ id, title, overview, poster_path, vote_average }) => {
  const basic_poster_path = "https://image.tmdb.org/t/p/w200";
  const [isHovered, setIsHovered] = useState(false);
  const nav = useNavigate();

  return (
    <section
      className="Movie"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={() => {
        nav(`/moviedetailpage/${id}`);
      }}
    >
      {!isHovered && (
        <section className="not_hover">
          <img src={`${basic_poster_path}${poster_path}`} alt="" />
          <section className="title">
            <h1>{title}</h1>
            <p>{vote_average}</p>
          </section>
        </section>
      )}
      {isHovered && (
        <section className="hover">
          <p>{overview}</p>
        </section>
      )}
    </section>
  );
};

export default Movie;
