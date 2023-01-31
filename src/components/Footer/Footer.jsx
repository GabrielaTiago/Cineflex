import { FooterStyles, Info, Movie, Poster, Schedule, Title } from "./Styles";

export function Footer({ poster, title, schedule }) {
  return (
    <FooterStyles>
      <Movie>
        <Poster src={poster} alt={`Poster do filme ${title}`} />
      </Movie>
      <Info>
        <Title>{title}</Title>
        <Schedule>{schedule}</Schedule>
      </Info>
    </FooterStyles>
  );
}
