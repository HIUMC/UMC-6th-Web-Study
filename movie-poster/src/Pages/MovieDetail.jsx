import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  background-image: url(${props => props.bgImage});
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
`;

const Poster = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-right: 40px;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 600px;
`;

const MovieTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 2.5rem;
`;

const MovieInfo = styled.p`
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

function MovieDetail() {
  const location = useLocation();
  const { id, title, poster_path, vote_average, overview, release_date } = location.state;

  const baseURL = "https://image.tmdb.org/t/p/w500";
  const posterURL = `${baseURL}${poster_path}`;

  return (
    <DetailContainer bgImage={posterURL}>
      <Overlay>
        <ContentWrapper>
          <Poster src={posterURL} alt={title} />
          <MovieDetails>
            <MovieTitle>{title}</MovieTitle>
            <MovieInfo>Rating: {vote_average}</MovieInfo>
            <MovieInfo>Release Date: {release_date}</MovieInfo>
            <MovieInfo>{overview}</MovieInfo>
          </MovieDetails>
        </ContentWrapper>
      </Overlay>
    </DetailContainer>
  );
}

export default MovieDetail