import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer, Header, PageTitle } from "../../components";
import { getSessions } from "../../services/moviesApi";

function MovieSchedules({ weekday, day, children }) {
  return (
    <div className="schedules-available">
      <div className="schedules-day">
        <h4>
          {weekday} - {day}
        </h4>
      </div>
      <div className="schedules-time">
        <div className="buttons">{children}</div>
      </div>
    </div>
  );
}

export function Schedule() {
  const { idMovies } = useParams();
  const [schedules, setSchedules] = useState([]);
  const [movies, setMovies] = useState({});

  useEffect(() => {
    fetchSessions(idMovies);
  }, [idMovies]);

  async function fetchSessions(idMovies) {
    try {
      const response = await getSessions(idMovies);
      setSchedules(response.days);
      setMovies(response);
    } catch (err) {
      alert(
        `Erro ${err} - Problemas ao acessar as sessões disponíveis, por favor atualize a página`
      );
    }
  }

  return (
    <>
      <Header />
      <main className="schedules">
        <PageTitle title={"Selecione o horário"} />
        {schedules.map((schedule, index) => (
          <MovieSchedules
            key={index}
            weekday={schedule.weekday}
            day={schedule.date}
          >
            {schedule.showtimes.map((schedule) => (
              <Link to={`/assento/${schedule.id}`}>
                <button className="time-button">{schedule.name}</button>
              </Link>
            ))}
          </MovieSchedules>
        ))}
      </main>
      <Footer poster={movies.posterURL} title={movies.title} schedule={""} />
    </>
  );
}
