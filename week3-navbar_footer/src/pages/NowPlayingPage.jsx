import { useContext, useEffect } from "react";
import { MovieContext } from "../App";
import { getMovieContext } from "../App";
import Movie from "../components/Movie";

const NowPlayingPage = () => {
  const movies = useContext(MovieContext);
  const getMovies = useContext(getMovieContext);

  const nowplaying_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;

  useEffect(() => {
    getMovies(nowplaying_url);
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

export default NowPlayingPage;
