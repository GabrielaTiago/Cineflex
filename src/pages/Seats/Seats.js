import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Forms from "./Forms";
import Footer from "../../pages/Schedule/Footer";
import { getSeats } from "../../services/seatsApi";
import { Header } from "../../components";

function IndividualSeat({ seat, status, id, info, setInfo }) {
  const [selected, setSelected] = useState(false);
  const select = `seat ${selected ? "green" : ""}`;

  return (
    <>
      {status ? (
        <div
          className={select}
          onClick={() => {
            let newInfo = { ...info };

            if (selected) {
              newInfo.ids = newInfo.ids.filter((value) => value !== id);
              newInfo.number = newInfo.number.filter((value) => value !== seat);
              setSelected(!selected);
              setInfo(newInfo);
              return;
            }

            setSelected(!selected);
            newInfo.ids.push(id);
            newInfo.number.push(seat);
            setInfo(newInfo);
          }}
        >
          <h6>{seat}</h6>
        </div>
      ) : (
        <div className="seat yellow">
          <h6>{seat}</h6>
        </div>
      )}
    </>
  );
}

export function Seats() {
  const { idSeats } = useParams();
  const [seats, setSeats] = useState([]);
  const [movies, setMovies] = useState({});
  const [time, setTime] = useState('');
  const [info, setInfo] = useState({ ids: [], number: [], name: "", cpf: "" });

  useEffect(() => {
    fetchSeats(idSeats);
  }, [idSeats]);

  async function fetchSeats(idSeats) {
    try {
      const { name, movie, seats } = await getSeats(idSeats);
      setSeats(seats);
      setMovies(movie);
      setTime(name);
    } catch (err) {
      alert(
        `Erro ${err} - Problemas ao carregar assentos, por favor atualize a página`
      );
    }
  }

  return (
    <>
      <Header />
      <main>
        <div className="select">
          <h3>Selecione o(s) assento(s)</h3>
        </div>
        <div className="seats">
          {seats.map((seat, index) => (
            <IndividualSeat
              hey={index}
              seat={seat.name}
              status={seat.isAvailable}
              id={seat.id}
              info={info}
              setInfo={setInfo}
            ></IndividualSeat>
          ))}
        </div>
        <div className="status">
          <div className="status a">
            <div className="seat green"></div>Selcionado
          </div>
          <div className="status a">
            <div className="seat"></div>Disponível
          </div>
          <div className="status a">
            <div className="seat yellow"></div>Indisponível
          </div>
        </div>
        <Forms info={info} setInfo={setInfo} />
      </main>
      <Footer>
        <div className="footer">
          <div className="poster">
            <img className="footer-img" src={movies.posterURL} />
          </div>
          <div className="footer-movie">
            <h5>{movies.title}</h5>
            <div className="sessao">{time}</div>
          </div>
        </div>
      </Footer>
    </>
  );
}
