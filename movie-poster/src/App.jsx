import React, { useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Popular from './Pages/Popular';
import Navor from './component/MoviePosterMain/Navor';
import Button from './component/MoviePosterMain/Button';
import Nowplaying from './Pages/Nowplaying';
import Upcoming from './Pages/Upcoming';
import NotFound from './Pages/NotFound';
import MovieDetail from './Pages/MovieDetail';
import Toprated from './Pages/Toprated';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const nav = useNavigate();

  const gotohome = () => {
    nav('/');
  };
  const gotopop = () => {
    nav('/popular');
  };
  const gotoUp = () => {
    nav('/upcoming');
  };
  const gotoTop = () => {
    nav('/toprated');
  };
  const gotoNow = () => {
    nav('/nowplaying');
  };
  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const location = useLocation();
  const showNavor = ['/', '/login', '/popular', '/upcoming', '/nowplaying', '/toprated', '/movie/:id'].some(path => location.pathname.includes(path));
  // includes()는 정확한 일치를 검사하는 반면, some()은 부분 문자열 포함 여부를 검사 함. 동적 경로는 배열의 요소와 정확히 일치하는 것이 않기에
  // 일반 include는 false를 반환할 가능성이 크다.
  
  return (
    <>
      {showNavor && (
        <Navor
          title={<Button text={"UMC Movie"} onClick={gotohome} />}
          login={<Button text={isLoggedIn ? "Logout" : "Login"} onClick={handleLoginClick} />}
          popular={<Button text={"Popular"} onClick={gotopop} />}
          upcoming={<Button text={"Upcoming"} onClick={gotoUp} />}
          toprated={<Button text={"TopRated"} onClick={gotoTop} />}
          nowplaying={<Button text={"Nowplaying"} onClick={gotoNow} />}
          
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/nowplaying" element={<Nowplaying />} />
        <Route path="/toprated" element={<Toprated />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
      </Routes>
    </>
  );
}

export default App;