import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../../services/moviesApi";

function ImagePoster({ source, identification }) {
  const id = Number(identification);
  return (
    <div id={id} className="poster">
      <Link to={`/sessao/${id}`}>
        <img className="img-poster" alt="poster" src={source} />
      </Link>
    </div>
  );
}

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
      <header>
        <h1>CINEFLEX</h1>
      </header>
      <main>
        <div className="select">
          <h3>Selecione o filme</h3>
        </div>
        <div className="posters-container">
          {posters.map((poster, index) => (
            <ImagePoster
              key={index}
              source={poster.posterURL}
              identification={poster.id}
            ></ImagePoster>
          ))}
        </div>
      </main>
    </>
  );
}
