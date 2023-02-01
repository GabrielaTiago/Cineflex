import { useState, useEffect } from "react";
import { Header } from "../../components";
import { useMoviesContext } from "../../contexts";
import { formatCPF } from "../../utils";
import { Button, PageTitle, Text, Title, Wrapper } from "./components";
import { Main, TicketContainer } from "./Styles";

export function Ticket() {
  const [seat, setSeat] = useState([]);
  const { movieData } = useMoviesContext();
  const { title, day, schedule, number, name, cpf } = movieData;

  useEffect(() => {
    setSeat(number);
  }, [number]);

  return (
    <>
      <Header />
      <Main>
        <PageTitle title={"Pedido feito com sucesso!"}></PageTitle>
        <TicketContainer>
          <Wrapper>
            <Title>Filme e sessão</Title>
            <Text>Filme: {title}</Text>
            <Text>
              Sessão: {day} - {schedule}
            </Text>
          </Wrapper>

          <Wrapper>
            <Title>Ingressos</Title>
            {seat.map((value) => (
              <Text key={value}>Assento {value}</Text>
            ))}
          </Wrapper>

          <Wrapper>
            <Title>Comprador</Title>
            <Text>Nome: {name}</Text>
            <Text>CPF: {formatCPF(cpf)}</Text>
          </Wrapper>
        </TicketContainer>

        <Button />
      </Main>
    </>
  );
}
