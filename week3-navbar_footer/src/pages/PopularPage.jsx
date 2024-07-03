import { useContext, useEffect } from "react";
import { MovieContext } from "../App";
import { getMovieContext } from "../App";
import Movie from "../components/Movie";

const PopularPage = () => {
  const movies = useContext(MovieContext);
  const getMovies = useContext(getMovieContext);

  const popular_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;

  useEffect(() => {
    getMovies(popular_URL);
  }, [movies]);

  return (
    <div className="movie-container">
      {movies.map((item) => (
        <Movie
          key={item.id}
          id={item.id}
          title={item.title}
          overview={item.overview}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
        />
      ))}
    </div>
  );
};

export default PopularPage;
