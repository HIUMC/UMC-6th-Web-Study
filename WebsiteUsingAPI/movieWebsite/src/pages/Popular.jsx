import Header from "../components/Header";
import Footer from "../components/Footer";
import PosterList from "../components/PosterList";
import { getMovies } from "../utils/getMovies";

const popularUrl = "https://api.themoviedb.org/3/movie/popular";

const movieList = (await getMovies(popularUrl)).results;

const Popular = () => {
  return (
    <>
      <Header />
      Popular
      <PosterList sortType={"Popular"} movieList={movieList} />
    </>
  );
};

export default Popular;
