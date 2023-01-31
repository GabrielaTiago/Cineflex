import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components";
import { useMoviesContext } from "../../../../contexts";
import { postSeats } from "../../../../services/seatsApi";
import { Box, Form, Input, Label } from "./Styles";

export function Forms({ info, setInfo }) {
  const { movieData, setMovieData } = useMoviesContext();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  function form(event) {
    event.preventDefault();
    reserveSeats();
  }

  async function reserveSeats() {
    const newData = { ...info };
    newData.name = name;
    newData.cpf = cpf;
    setInfo(newData);

    try {
      const { ids, number, name, cpf } = newData;
      
      const response = await postSeats({
        ids,
        name,
        cpf,
      });

      if (response) {
        setMovieData({
          ...movieData,
          ids,
          number,
          name,
          cpf,
        });
        navigate("/sucesso");
      }
    } catch (err) {
      alert(
        `Erro ${err} - Problemas ao reservar assentos, por favor atualize a página`
      );
    }
  }

  return (
    <Form onSubmit={form}>
      <Box>
        <Label>Nome do comprador:</Label>
        <Input
          type="text"
          placeholder="Digite seu nome..."
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          required
        />
      </Box>
      <Box>
        <Label>CPF do comprador:</Label>
        <Input
          type="text"
          placeholder="Digite seu CPF..."
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
          required
          minLength={11}
          maxLength={11}
          pattern="\d*"
        />
      </Box>

      <Button type="submit">Reservar assento(s)</Button>
    </Form>
  );
}
