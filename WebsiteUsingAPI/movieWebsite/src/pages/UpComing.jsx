import Header from "../components/Header";
import Footer from "../components/Footer";
import PosterList from "../components/PosterList";
import { getMovies } from "../utils/getMovies";

const upComingUrl = "https://api.themoviedb.org/3/movie/upcoming";

const movieList = (await getMovies(upComingUrl)).results;

const UpComing = () => {
  return (
    <>
      <Header />
      UpComing
      <PosterList movieList={movieList} />
    </>
  );
};

export default UpComing;
