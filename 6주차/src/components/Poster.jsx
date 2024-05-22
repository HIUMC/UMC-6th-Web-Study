import "./Poster.css";

const Poster = ({ movie }) => {
  console.log(movie.title);
  return (
    <div className="Poster">
      <div className="movieImg">
        <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} />
        <div className="moviePlot">
          <div>{movie.title}</div>
          <div>{movie.overview}</div>
        </div>
      </div>
      <div className="movieInfo">
        <div className="movieName">{movie.title}</div>
        <div>{movie.vote_average}</div>
      </div>
    </div>
  );
};
export default Poster;
