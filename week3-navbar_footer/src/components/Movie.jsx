import "./Movie.css";

const Movie = ({ id, title, overview, poster_path, vote_average }) => {
  const basic_poster_path = "https://image.tmdb.org/t/p/w200";
  return (
    <section className="Movie">
      <img src={`${basic_poster_path}${poster_path}`} alt="" />
      <section className="text">
        <h1>{title}</h1>
        <p>{vote_average}</p>
        {/* <h4>{overview}</h4> */}
      </section>
    </section>
  );
};

export default Movie;
