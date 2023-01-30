import { useState, useEffect } from "react";
import { Header, PageTitle } from "../../components";
import { Movie } from "./components";
import { getMovies } from "../../services/moviesApi";

export function HomeScreen() {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const response = await getMovies();
      setPosters(response);
    } catch (err) {
      alert(
        `Erro ${err} - Problemas ao acessar os filmes disponíveis, por favor atualize a página`
      );
    }
  }

  return (
    <>
      <Header />
      <main>
        <PageTitle title={"Selecione o filme"} />
        <div className="posters-container">
          {posters.map((movie) => {
            const { id, title, posterURL } = movie;

            return (
              <Movie key={id} id={id} title={title} posterURL={posterURL} />
            );
          })}
        </div>
      </main>
    </>
  );
}
