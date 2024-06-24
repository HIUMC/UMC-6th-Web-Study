import { useState, createContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
import MovieDetail from "./pages/MovieDetail";

import "./App.css";

function App() {
  const [curPage, SetCurPage] = useState();
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/nowPlaying" element={<NowPlaying />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/topRated" element={<TopRated />} />
        <Route path="/upComing" element={<UpComing />} />
        <Route path="/:movieID" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
