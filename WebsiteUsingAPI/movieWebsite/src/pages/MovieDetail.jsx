import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

const getVoteAverage = (movies) => {
  const num = parseInt(movies.vote_average);
  let stars = "";
  for (let i = 0; i < num; i++) {
    stars = stars + "⭐";
  }
  return stars;
};

const MovieDetail = () => {
  //const params = useParams();
  const movie = useLocation().state.value;
  const stars = getVoteAverage(movie);

  return (
    <>
      <StyledMovieDetail movie={movie} className="MovieDetail">
        <div className="details">
          <StyledImgSection className="img_section">
            <img
              src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
            />
          </StyledImgSection>
          <StyledInfoSection className="info_section">
            <h1>{movie.original_title}</h1>
            <div>평점 {stars}</div>
            <div>개봉일 {movie.release_date}</div>
            <div>
              줄거리<p>{movie.overview}</p>
            </div>
          </StyledInfoSection>
        </div>
      </StyledMovieDetail>
    </>
  );
};

const StyledImgSection = styled.section`
  width: 300px;
  height: auto;
  margin: 60px 0;
  margin-right: 80px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const StyledMovieDetail = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.75)),url(${(
    props
  ) => "https://image.tmdb.org/t/p/original" + props.movie.poster_path});
  background-size: cover;
  background-position: center 30%;
    
  
  & .details {
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    
`;

const StyledInfoSection = styled.div`
  margin-top: 50px;
  width: 35vw;
  & > div {
    margin: 30px 0;
    font-size: 16px;
  }
  & > div > p {
    font-size: 14px;
`;

export default MovieDetail;
