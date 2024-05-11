import "./App.css";
import Movie from "./components/MoviePosterMain/Movie";
import styled from "styled-components";
import { movies } from "./data/MovieDummy";

export const Body = styled.div`
  background-color: #242756;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  return (
    <Body>
      <AppContainer>
        {movies.results.map((item) => {
          return (
            <Movie
              key={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </AppContainer>
    </Body>
  );
}

export default App;
