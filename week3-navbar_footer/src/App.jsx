import { useState, useEffect, createContext } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Notfound from "./pages/Notfound";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpComing from "./pages/UpComing";

export const MovieContext = createContext();
export const getMovieContext = createContext();

function App() {
  const nav = useNavigate();
  const [movies, setMovies] = useState([]);

  const getMovies = async (url) => {
    const movies = await axios.get(url);
    const results = movies.data.results;
    setMovies(results);
  };

  return (
    <>
      <div className="Navbar">
        <button onClick={() => nav("/")}>UMC MOVIE</button>
        <div className="right">
          <button>회원가입</button>
          <button onClick={() => nav("/popularpage")}>Popular</button>
          <button onClick={() => nav("/nowplayingpage")}>Now Playing</button>
          <button onClick={() => nav("/topratedpage")}>Top Rated</button>
          <button onClick={() => nav("/upcomingpage")}>Upcoming</button>
        </div>
      </div>
      <MovieContext.Provider value={movies}>
        <getMovieContext.Provider value={getMovies}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/nowplayingpage" element={<NowPlayingPage />} />
            <Route path="/popularpage" element={<PopularPage />} />
            <Route path="/topratedpage" element={<TopRatedPage />} />
            <Route path="/upcomingpage" element={<UpComing />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </getMovieContext.Provider>
      </MovieContext.Provider>
    </>
  );
}

export default App;
