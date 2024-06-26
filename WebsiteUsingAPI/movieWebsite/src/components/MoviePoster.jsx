//import "./MoviePoster.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MoviePoster = ({ movie, onClick }) => {
  const nav = useNavigate();
  return (
    <StyledPoster
      className="MoviePoster"
      onClick={() =>
        nav(`/movie/${movie.original_title}`, { state: { value: movie } })
      }
    >
      <section className="img_section">
        <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} />
        <section className="hover_info">
          <div>{movie.title}</div>
          <div>{movie.overview}</div>
        </section>
      </section>
      <section className="info_section">
        <div className="info_title">{movie.title}</div>
        <div className="info_ratings">{movie.vote_average}</div>
      </section>
    </StyledPoster>
  );
};

const StyledPoster = styled.div`
  width: 230px;
  height: 430px;
  border: none;
  border-radius: 5px;

  .img_section {
    position: relative;
    height: 80%;
  }
  & .img_section img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  & .info_section {
    display: flex;
    justify-content: space-between;
    height: 20%;
    background-color: darkslategray;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .hover_info {
    display: none;
    width: 100%;
    height: 100%;
  }

  &:hover .hover_info {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    background-color: rgb(0, 0, 0, 0.7);
    color: white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .hover_info div {
    display: -webkit-box;
    margin-top: 10px;
    margin-bottom: 5px;
    -webkit-line-clamp: 12;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default MoviePoster;
