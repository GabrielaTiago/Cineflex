import { Link } from "react-router-dom";
import { MovieWrapper, Poster } from "./Styles";

export function Movie({ id, title, posterURL }) {
  const identification = Number(id);

  return (
    <MovieWrapper id={identification}>
      <Link to={`/sessao/${identification}`}>
        <Poster src={posterURL} alt={`Poster do filme ${title}`} />
      </Link>
    </MovieWrapper>
  );
}
