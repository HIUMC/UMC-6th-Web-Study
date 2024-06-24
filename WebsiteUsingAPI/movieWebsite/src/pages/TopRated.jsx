import Header from "../components/Header";
import Footer from "../components/Footer";
import PosterList from "../components/PosterList";

const TopRated = () => {
  return (
    <>
      <Header />
      TopRated
      <PosterList sortType={"TopRated"} />
    </>
  );
};

export default TopRated;
