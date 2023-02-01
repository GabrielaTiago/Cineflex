import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer, Header, PageTitle } from "../../components";
import { Session } from "./components";
import { getSessions } from "../../services/moviesApi";
import { Main, SchedulesContainer } from "./Styles";
import { useMoviesContext } from "../../contexts";

export function Schedule() {
  const { idMovies } = useParams();
  const [schedules, setSchedules] = useState([]);
  const { movieData, setMovieData } = useMoviesContext();

  useEffect(() => {
    fetchSessions(idMovies);
    // eslint-disable-next-line
  }, [idMovies]);

  async function fetchSessions(idMovies) {
    try {
      const response = await getSessions(idMovies);
      setSchedules(response.days);
      setMovieData({
        ...movieData,
        title: response.title,
        poster: response.posterURL,
        schedule: "",
        weekday: ""
      });
    } catch (err) {
      alert(
        `Erro ${err} - Problemas ao acessar as sessões disponíveis, por favor atualize a página`
      );
    }
  }

  return (
    <>
      <Header />
      <Main>
        <PageTitle title={"Selecione o horário"} />
        <SchedulesContainer>
          {schedules.map((session) => {
            const { id, weekday, date, showtimes } = session;
            return (
              <Session
                key={id}
                weekday={weekday}
                day={date}
                schedules={showtimes}
              />
            );
          })}
        </SchedulesContainer>
      </Main>
      <Footer />
    </>
  );
}
