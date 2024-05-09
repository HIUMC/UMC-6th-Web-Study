import "./App.css";
import Movie from "./Movie";
import { movies } from "./movieData";
import { useEffect, useState } from "react";

function App() {
  const [json, setJson] = useState([]);
  useEffect(() => {
    setJson(movies.results);
  }, []);

  return (
    <div className="container">
      {json.map((data) => (
        <Movie
          key={data.id}
          id={data.id}
          title={data.title}
          vote_average={data.vote_average}
          poster_path={data.poster_path}
          overview={data.overview}
        ></Movie>
      ))}
    </div>
  );
}

export default App;
