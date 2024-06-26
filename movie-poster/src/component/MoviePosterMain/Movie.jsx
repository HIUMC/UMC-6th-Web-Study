import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const HoverInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;
`;

export const HoverInfoH5 = styled.h5`
  color: white;
  margin: 5px;
`;

export const HoverInfoSpan = styled.span`
  color: white;
  margin: 5px;
`;

export const MovieContainer = styled.div`
  margin: 18px;
  background-color: #474c79;
  color: white;
  border-radius: 5px;
  position: relative;
  width: 300px;
  cursor: pointer;

  &:hover ${HoverInfo} {
    opacity: 1;
  }
`;

export const MovieContainerImg = styled.img`
  max-width: 100%;
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const MovieInfoH5 = styled.h5`
  margin: 0;
  color: white;
`;

export const MovieInfoSpan = styled.span`
  color: white;
  margin-left: auto;
`;

function Movie({ id, title, poster_path, vote_average, overview }) {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const posterURL = `${baseURL}${poster_path}`;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`, { state: { id, title, poster_path, vote_average, overview } });
  }; // 클릭 시 전에 라우팅으로 설정해 둔 <Route path="/movie/:id" element={<MovieDetail/>} /> 때문에 <MovieDetail/>으로 이동,
  //props로는  state: { id, title, poster_path, vote_average, overview } 전달 되어 MovieDetail에서는 구조분해할당으로 전달 받음!!

  return (
    <MovieContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick} // 컨테이너에 호버 이벤트 말고 클릭 이벤트까지 추가
    >
      <MovieContainerImg src={posterURL} alt={title} />
      {!isHovered && (
        <MovieInfo>
          <MovieInfoH5>{title}</MovieInfoH5>
          <MovieInfoSpan>⭐{vote_average}</MovieInfoSpan>
        </MovieInfo>
      )}
      {isHovered && (
        <HoverInfo>
          <HoverInfoH5>{title}</HoverInfoH5>
          <HoverInfoSpan>{overview}</HoverInfoSpan>
        </HoverInfo>
      )}
    </MovieContainer>
  );
}

export default Movie;