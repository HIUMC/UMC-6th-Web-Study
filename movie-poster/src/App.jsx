import React, { useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Popular from './Pages/Popular';
import Navor from './component/MoviePosterMain/Navor';
import Button from './component/MoviePosterMain/Button';
import Nowplaying from './Pages/Nowplaying';
import Upcoming from './Pages/Upcoming';
import NotFound from './Pages/NotFound';
import MovieDetail from './Pages/MovieDetail';
import Toprated from './Pages/Toprated';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; // Link의 기본 색상을 상속받음
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          title={<StyledLink to = "/"><Button text={"UMC Movie"} /></StyledLink>}
          login={<Button text={isLoggedIn ? "Logout" : "Login"} onClick={handleLoginClick} />}
          popular={<StyledLink to = "/popular"><Button text={"Popular"}/></StyledLink>}
          upcoming={<StyledLink to = "/upcoming"><Button text={"Upcoming"} /></StyledLink>}
          toprated={<StyledLink to = "toprated"><Button text={"TopRated"}/></StyledLink>}
          nowplaying={<StyledLink to = "/nowplaying"><Button text={"Nowplaying"}/></StyledLink>}
          
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
