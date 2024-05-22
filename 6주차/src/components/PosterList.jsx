import "./PosterList.css";
import Poster from "./Poster";
import { movies } from "./movies";

const movieList = movies.results;

const PosterList = () => {
  return (
    <div className="List">
      {movieList.map((movie) => {
        return <Poster key={movie.id} movie={movie} />;
      })}
    </div>
  );
};
export default PosterList;
