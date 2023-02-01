import { useMoviesContext } from "../../contexts";
import { FooterStyles, Info, Movie, Poster, Schedule, Title } from "./Styles";

export function Footer() {
  const { movieData } = useMoviesContext();
  const { poster, title, schedule, weekday } = movieData;

  return (
    <FooterStyles>
      <Movie>
        <Poster src={poster} alt={`Poster do filme ${title}`} />
      </Movie>
      <Info>
        <Title>{title}</Title>
        <Schedule>
          {weekday} - {schedule}
        </Schedule>
      </Info>
    </FooterStyles>
  );
}
