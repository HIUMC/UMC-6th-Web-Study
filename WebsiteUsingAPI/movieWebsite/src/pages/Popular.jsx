import Header from "../components/Header";
import Footer from "../components/Footer";
import PosterList from "../components/PosterList";

const Popular = () => {
  return (
    <>
      <Header />
      Popular
      <PosterList sortType={"Popular"} />
    </>
  );
};

export default Popular;
