//import "./PosterList.css";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import { useNavigate } from "react-router-dom";

const PosterList = ({ movieList }) => {
  const nav = useNavigate();
  const onClick = (title) => {
    console.log("클릭");
    nav(`/${title}`);
  };
  console.log(movieList);
  return (
    <StyledGrid className="movieGrid">
      {movieList &&
        movieList.map((movie) => {
          return <MoviePoster key={movie.id} movie={movie} />;
        })}
    </StyledGrid>
  );
};

const StyledGrid = styled.div`

  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  place-items: center;
  overflow: hidden;
  column-gap: 10px;
  row-gap: 20px;
}`;
export default PosterList;
