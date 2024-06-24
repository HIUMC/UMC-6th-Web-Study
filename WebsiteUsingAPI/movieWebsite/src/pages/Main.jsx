import Header from "../components/Header";
import Footer from "../components/Footer";
import PosterList from "../components/PosterList";
import { useContext } from "react";
import { movies } from "../components/movies";

const Main = () => {
  console.log("타입" + typeof movies);
  const movieList = movies.results;
  console.log(movieList);
  return (
    <div className="Main">
      <Header />
      <section>
        Main
        <PosterList movieList={movieList} />
      </section>
    </div>
  );
};

export default Main;
