import "./PosterList.css";
import MoviePoster from "./MoviePoster";
import Poster from "./Poster";
import { useNavigate } from "react-router-dom";

const PosterList = ({ movieList }) => {
  const nav = useNavigate();
  const onClick = (title) => {
    console.log("클릭");
    nav(`/${title}`);
  };
  console.log(movieList);
  return (
    <div className="movieGrid">
      {movieList &&
        movieList.map((movie) => {
          return <MoviePoster key={movie.id} movie={movie} />;
        })}
    </div>
  );
};
export default PosterList;
