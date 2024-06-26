import Header from "../components/Header";
import Footer from "../components/Footer";
import PosterList from "../components/PosterList";
import { getMovies } from "../utils/getMovies";

const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";

const movieList = (await getMovies(nowPlayingUrl)).results;

const NowPlaying = () => {
  return (
    <>
      <Header />
      NowPlaying
      <PosterList movieList={movieList} />
    </>
  );
};

export default NowPlaying;
