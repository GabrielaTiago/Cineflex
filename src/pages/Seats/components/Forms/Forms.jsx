import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components";
import { useMoviesContext } from "../../../../contexts";
import { postSeats } from "../../../../services/seatsApi";
import { Error } from "./Error/Error";
import { Box, Form, Input, Label } from "./Styles";
import { cpfValidations, nameValidations } from "./Validations";

export function Forms() {
  const { movieData, setMovieData } = useMoviesContext();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState({
    nameError: false,
    nameErrMsg: "",
    cpfError: false,
    cpfErrMsg: "",
    disabledBtn: true,
  });
  const { nameError, nameErrMsg, cpfError, cpfErrMsg, disabledBtn } = error;

  const handleSubmit = (e) => {
    e.preventDefault();

    const seatsSelection = movieData.ids.length > 0;
    const noNameErrors = nameValidations(name, error, setError);
    const noCpfErrors = cpfValidations(cpf, error, setError);

    if (noNameErrors && noCpfErrors && seatsSelection) reserveSeats();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError({
      ...error,
      disabledBtn: false,
      nameError: false,
      cpfError: false,
    });
  };

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
    setError({
      ...error,
      disabledBtn: false,
      nameError: false,
      cpfError: false,
    });
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
        />
        {nameError && <Error errMsg={nameErrMsg} />}
      </Box>
      <Box>
        <Label>CPF do comprador:</Label>
        <Input
          type="text"
          placeholder="Digite seu CPF..."
          onChange={handleCpfChange}
          value={cpf}
        />
        {cpfError && <Error errMsg={cpfErrMsg} />}
      </Box>

      <Button type="submit" disabled={disabledBtn}>
        Reservar assento(s)
      </Button>
    </Form>
  );
}
