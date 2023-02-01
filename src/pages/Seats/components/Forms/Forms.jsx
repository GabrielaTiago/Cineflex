import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components";
import { useMoviesContext } from "../../../../contexts";
import { postSeats } from "../../../../services/seatsApi";
import { Box, Form, Input, Label } from "./Styles";

export function Forms() {
  const { movieData, setMovieData } = useMoviesContext();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    reserveSeats();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  };

  async function reserveSeats() {
    setMovieData({
      ...movieData,
      name,
      cpf,
    });

    try {
      const { ids, name, cpf } = movieData;

      const response = await postSeats({
        ids,
        name,
        cpf,
      });

      if (response === "OK!") {
        navigate("/sucesso");
      }
    } catch (err) {
      alert(
        `Erro ${err} - Problemas ao reservar assentos, por favor atualize a página`
      );
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Box>
        <Label>Nome do comprador:</Label>
        <Input
          type="text"
          placeholder="Digite seu nome..."
          onChange={handleNameChange}
          value={name}
          required
        />
      </Box>
      <Box>
        <Label>CPF do comprador:</Label>
        <Input
          type="text"
          placeholder="Digite seu CPF..."
          onChange={handleCpfChange}
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
