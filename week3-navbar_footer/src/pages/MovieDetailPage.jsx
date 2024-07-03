import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../App";
import "./MovieDetailPage.css";

const MovieDetailPage = () => {
  const params = useParams();
  const movies = useContext(MovieContext);
  const foundMovie = movies.find((movie) => movie.id === parseInt(params.id));
  const basic_poster_path = "https://image.tmdb.org/t/p/w200";

  if (!foundMovie) {
    return <div>Loading...</div>;
  }

  const { title, overview, poster_path, vote_average } = foundMovie;
  let movieOverview = overview;
  let movieVote_average = Math.round(vote_average);
  // 반올림

  const star = (vote) => {
    return <>{"⭐️".repeat(vote)}</>;
  };

  if (!overview) {
    movieOverview = '"TMDB"에서 제공하는 API에 상세 줄거리 정보가 없습니다';
  }

  return (
    <div className="MovieDetailPage">
      <div className="MovieDetailPage-content">
        <img src={`${basic_poster_path}${poster_path}`} alt={title} />
        <div className="info">
          <h1>{title}</h1>
          <p>평점 {star(movieVote_average)}</p>
          <p>줄거리</p>
          <p>{movieOverview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
