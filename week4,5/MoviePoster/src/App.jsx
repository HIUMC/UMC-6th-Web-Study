import { useState } from "react";
import styled from "styled-components";
import MovieCard from "./components/MovieCard";
import { movies } from "./assets/data";

function App() {
  const data = movies.results;

  return (
    <Container>
      {data.map((item) => (
        <MovieCard
          key={item.id}
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
          overview={item.overview}
        />
      ))}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
