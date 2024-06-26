import { useState, createContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
import MovieDetail from "./pages/MovieDetail";

import "./App.css";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/nowPlaying" element={<NowPlaying />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/topRated" element={<TopRated />} />
        <Route path="/upComing" element={<UpComing />} />
        <Route path="/movie/:movieID" element={<MovieDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
