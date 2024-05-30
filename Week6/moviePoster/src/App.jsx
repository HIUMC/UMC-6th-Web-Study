import "./App.css";
import Movie from "./components/MoviePosterMain/MovieList";
import styled from "styled-components";
import { movies } from "./data/MovieDummy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NowplayingPage from "./pages/NowplayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpComing from "./pages/UpComing";
import NotFound from "./pages/NotFound";

export const Body = styled.div`
  background-color: #242756;
`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 18px;
  margin: 0 20px;
`;

function App() {
  return (
    <Body>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/now" element={<NowplayingPage />}></Route>
        <Route path="/popular" element={<PopularPage />}></Route>
        <Route path="/top" element={<TopRatedPage />}></Route>
        <Route path="/upcoming" element={<UpComing />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Body>
  );
}

export default App;
