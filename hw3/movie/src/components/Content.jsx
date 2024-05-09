import "./Content.css";

import { movies } from "./movies";
const Content = () => {
  return (
    <div>
      <div className="container">
        {movies.results.map((movie) => (
          <div key={movie.id} className="item">
            <h2>{movie.title}</h2>
            <div className="overview">{movie.overview}</div>
            <div className="another">Release Date: {movie.release_date}</div>
            <div className="another">Vote Average: {movie.vote_average}</div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
