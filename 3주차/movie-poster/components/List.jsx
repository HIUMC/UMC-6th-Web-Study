import Poster from "./Poster";
import "./List.css";

function List({ posters }) {
  return (
    <div className="List">
      {posters.map((poster) => {
        return <Poster key={poster.id} {...poster} />
      })}
    </div>
  )
}

export default List;