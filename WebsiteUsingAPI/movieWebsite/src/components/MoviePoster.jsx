import "./MoviePoster.css";
import { useNavigate } from "react-router-dom";

const MoviePoster = ({ movie, onClick }) => {
  const nav = useNavigate();
  return (
    <div className="MoviePoster" onClick={() => nav(movie.original_title)}>
      <section className="img_section">
        <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} />
        <section className="hover_info">
          <div>{movie.title}</div>
          <div>{movie.overview}</div>
        </section>
      </section>
      <section className="info_section">
        <div className="info_title">{movie.title}</div>
        <div className="info_ratings">{movie.vote_average}</div>
      </section>
    </div>
  );
};

export default MoviePoster;
