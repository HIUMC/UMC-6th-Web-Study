import "./App.css";
import Movie from "./components/Movie";
import { movies } from "./services/api";

function App() {
  return (
    <div className="App">
      {movies.results.map((item) => {
        return (
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
          />
        );
      })}
    </div>
  );
}

export default App;
