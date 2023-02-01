import { useNavigate } from "react-router-dom";
import { useMoviesContext } from "../../../../contexts";
import { Container } from "./Styles";

export function Button() {
  const navigate = useNavigate();
  const { setMovieData } = useMoviesContext();
  
  const goToHomePage = () => {
    setMovieData({
      poster: "",
      title: "",
      schedule: "",
      weekday: "",
      day: "",
      ids: [],
      number: [],
      name: "",
      cpf: "",
    });
    navigate("/");
  };

  return <Container onClick={goToHomePage}>Voltar para Home</Container>;
}
