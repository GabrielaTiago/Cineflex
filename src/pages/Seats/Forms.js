import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSeats } from "../../services/seatsApi";

export default function Forms({ info, setInfo }) {
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
      const response = await postSeats({
        ids: newData.ids,
        name: newData.name,
        cpf: newData.cpf,
      });

      if (response) {
        navigate("/sucesso", { state: newData });
      }
    } catch (err) {
      alert(
        `Erro ${err} - Problemas ao reservar assentos, por favor atualize a página`
      );
    }
  }

  return (
    <form onSubmit={form}>
      <div className="forms">
        <label>Nome do comprador:</label>
        <input
          type="text"
          placeholder="Digite seu nome..."
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          required
        />
        <label>CPF do comprador:</label>
        <input
          type="text"
          placeholder="Digite seu CPF..."
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
          required
          minLength={11}
          maxLength={11}
          pattern="\d*"
        />
      </div>

      <input type="submit" value="Reservar assento(s)" />
    </form>
  );
}
