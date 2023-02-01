import { useState, useEffect } from "react";
import { Header, PageTitle } from "../../components";
import { Movie } from "./components";
import { getMovies } from "../../services/moviesApi";
import { Main, MoviesContainer } from "./Styles";
import { useMoviesContext } from "../../contexts";

export function HomeScreen() {
  const [posters, setPosters] = useState([]);
  const { setMovieData } = useMoviesContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  
  async function fetchMovies() {
    try {
      const response = await getMovies();
      setPosters(response);
      setMovieData({
        poster: "",
        title: "",
        schedule: "",
        weekday: "",
        day: "",
        ids: [],
        number: [],
        name: "",
        cpf: "",
      });
    } catch (err) {
      alert(
        `Erro ${err} - Problemas ao acessar os filmes disponíveis, por favor atualize a página`
      );
    }
  }

  return (
    <>
      <Header />
      <Main>
        <PageTitle title={"Selecione o filme"} />
        <MoviesContainer>
          {posters.map((movie) => {
            const { id, title, posterURL } = movie;

            return (
              <Movie key={id} id={id} title={title} posterURL={posterURL} />
            );
          })}
        </MoviesContainer>
      </Main>
    </>
  );
}
