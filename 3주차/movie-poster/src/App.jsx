import './App.css';
import { movies } from "./api.jsx";
import List from "../components/List.jsx";
import axios from "axios";
import { useEffect, useState } from 'react';


function App() {
  const [dummyDatas, setDummyDatas] = useState([]);

  useEffect(() => {
    const API_KEY = "04ddb714d007b010e7485713ff1d3411";
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&append_to_response=poster`;

    axios.get(url)
      .then((response) => {
        setDummyDatas(response.data.results);
        console.log(dummyDatas);
      });
  }, []);


  // const dummyDatas = movies.results;
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

  return (
    <List posters={posters}></List>
  )
}

export default App;
