import Header from "../components/Header";
import Footer from "../components/Footer";
import PosterList from "../components/PosterList";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWQ0YmQ4OGIwMDFkN2M0YWUyODQ5YWU5MTViOTkzYiIsInN1YiI6IjY2NGRkY2FhNzA5MDFlNTcxMWI5OTU1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O234MBRHbG7GYuTh_QiilQppy6lbllNB7PkoaecnQvw",
  },
};
async function getData() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing",
    options
  );
  if (res.ok) {
    const resJSON = await res.json();
    return resJSON;
  }
}
const movieList = (await getData()).results;

console.log(movieList);
movieList.map((item) => {
  console.log(item.title);
});

const NowPlaying = () => {
  return (
    <>
      <Header />
      NowPlaying
      <PosterList movieList={movieList} />
    </>
  );
};

export default NowPlaying;
