import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSeats } from "../../services/seatsApi";
import { Footer, Header, PageTitle } from "../../components";
import { Caption, Forms, RoomSeats } from "./components";
import { Container, Main, SeatsContainer } from "./Styles";

export function Seats() {
  const { idSeats } = useParams();
  const [seats, setSeats] = useState([]);
  const [info, setInfo] = useState({ ids: [], number: [], name: "", cpf: "" });

  useEffect(() => {
    fetchSeats(idSeats);
  }, [idSeats]);

  async function fetchSeats(idSeats) {
    try {
      const { seats } = await getSeats(idSeats);
      setSeats(seats);
    } catch (err) {
      alert(
        `Erro ${err} - Problemas ao carregar assentos, por favor atualize a página`
      );
    }
  }

  return (
    <>
      <Header />
      <Main>
        <PageTitle title={"Selecione o(s) assento(s)"} />
        <SeatsContainer>
          <Container>
            {seats.map((seat) => {
              const { id, name, isAvailable } = seat;
              return (
                <RoomSeats
                  key={id}
                  id={id}
                  number={name}
                  isAvailable={isAvailable}
                  info={info}
                  setInfo={setInfo}
                />
              );
            })}
          </Container>
          <Caption />
          <Forms info={info} setInfo={setInfo} />
        </SeatsContainer>
      </Main>
      <Footer />
    </>
  );
}
