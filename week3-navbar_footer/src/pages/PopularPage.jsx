import { useContext, useEffect } from "react";
import { MovieContext } from "../App";
import { getMovieContext } from "../App";
import Movie from "../components/Movie";

const PopularPage = () => {
  const movies = useContext(MovieContext);
  const getMovies = useContext(getMovieContext);

  const API_KEY = "94106d9b31cd43ca225f0482d2168f68";
  const popular_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

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
