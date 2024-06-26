import Header from "../components/Header";
import Footer from "../components/Footer";
import PosterList from "../components/PosterList";
import { getMovies } from "../utils/getMovies";

const topRatedUrl = "https://api.themoviedb.org/3/movie/top_rated";

const movieList = (await getMovies(topRatedUrl)).results;

const TopRated = () => {
  return (
    <>
      <Header />
      TopRated
      <PosterList sortType={"TopRated"} movieList={movieList} />
    </>
  );
};

export default TopRated;
