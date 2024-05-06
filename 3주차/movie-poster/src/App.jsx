import './App.css';
import { movies } from "./api.jsx";
import List from "../components/List.jsx";

const dummyDatas = movies.results;
const posters = dummyDatas.map((dummyData) => {
  const newPoster = {
    id: dummyData.id,
    title: dummyData.title,
    overview: dummyData.overview,
    posterPath: dummyData.poster_path,
    vote: dummyData.vote_average,
  };
  return newPoster;
});

function App() {
  return (
    <List posters={posters}></List>
  )
}

export default App;
