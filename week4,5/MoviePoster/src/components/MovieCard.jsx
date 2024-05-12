import styled from "styled-components";
import { useState } from "react";

const MovieCard = ({ title, poster_path, vote_average, overview }) => {
  const [isHover, setIsHover] = useState(false);
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const posterURL = `${baseURL}${poster_path}`;
  return (
    <Container
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Image src={posterURL}></Image>
      <TitleWrapper>
        <Title>{title}</Title>
        <Rating>{vote_average}</Rating>
      </TitleWrapper>

      {isHover && (
        <Description>
          <Desc_title>{title}</Desc_title>
          <Desc_text>{overview}</Desc_text>
        </Description>
      )}
    </Container>
  );
};

export default MovieCard;

const Description = styled.div`
  opacity: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  margin: 20px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 500px;
  background-color: black;
  color: white;
  margin: 10px;
  &:hover ${Description} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 100px;
  background-color: #1a2f7b;
`;
const Title = styled.div`
  margin: 10px 10px 0 8px;
  width: 270px;
`;
const Rating = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 15px;
  margin: 10px 10px 0 0;
`;

const Desc_title = styled.h3`
  margin: 20px 10px;
`;
const Desc_text = styled.span`
  margin: 10px;
  font-size: 10px;
`;
