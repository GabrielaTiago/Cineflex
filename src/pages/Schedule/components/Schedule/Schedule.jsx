import { useNavigate } from "react-router-dom";
import { Button } from "./Styles";
import { useMoviesContext } from "../../../../contexts";

export function Schedule({ id, time, weekday, day }) {
  const { movieData, setMovieData } = useMoviesContext();
  const navigate = useNavigate();

  const handleClick = () => {
    setMovieData({
      ...movieData,
      schedule: time,
      weekday: weekday,
      day: day,
    });
    navigate(`/assento/${id}`);
  };

  return <Button onClick={handleClick}>{time}</Button>;
}
