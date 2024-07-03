import { useState, createContext } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Notfound from "./pages/Notfound";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpComing from "./pages/UpComing";
import MovieDetailPage from "./pages/MovieDetailPage";
import SideBar from "./pages/SideBar";
import Membership from "./pages/Membership";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const MovieContext = createContext();
export const getMovieContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async (url) => {
    const movies = await axios.get(url);
    const results = movies.data.results;
    setMovies(results);
  };

  return (
    <>
      <Navbar />
      <MovieContext.Provider value={movies}>
        <getMovieContext.Provider value={getMovies}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/nowplayingpage" element={<NowPlayingPage />} />
            <Route path="/popularpage" element={<PopularPage />} />
            <Route path="/topratedpage" element={<TopRatedPage />} />
            <Route path="/upcomingpage" element={<UpComing />} />
            <Route path="/moviedetailpage/:id" element={<MovieDetailPage />} />
            <Route path="/sidebar" element={<SideBar />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </getMovieContext.Provider>
      </MovieContext.Provider>
      <Footer />
    </>
  );
}

export default App;
