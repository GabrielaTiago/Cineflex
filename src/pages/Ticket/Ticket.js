import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Header } from "../../components";
import { PageTitle, Text, Title, Wrapper } from "./components";
import { Main, TicketContainer } from "./Styles";

export function Ticket() {
  const location = useLocation();
  const info = location.state;
  const [seat, setSeat] = useState([]);

  useEffect(() => {
    setSeat(info.number);
  }, [info.number]);

  return (
    <>
      <Header />
      <Main>
        <PageTitle title={"Pedido feito com sucesso!"}></PageTitle>
        <TicketContainer>
          <Wrapper>
            <Title>Filme e sessão</Title>
            <Text>Filme: {}</Text>
            <Text>Sessão: {}</Text>
          </Wrapper>

          <Wrapper>
            <Title>Ingressos</Title>
            {seat.map((value) => (
              <Text key={value}>Assento {value}</Text>
            ))}
          </Wrapper>

          <Wrapper>
            <Title>Comprador</Title>
            <Text>Nome: {info.name}</Text>
            <Text>CPF: {info.cpf}</Text>
          </Wrapper>
        </TicketContainer>

        <Link to="/">
          <Button>Voltar para a Home</Button>
        </Link>
      </Main>
    </>
  );
}
