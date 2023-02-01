import { useMoviesContext } from "../../../../../contexts";
import { Seat } from "./Styles";

export function Selected({ id, number, selected, setSelected }) {
  const { movieData, setMovieData } = useMoviesContext();
 
  const handleSeatSelection = () => {
    let newInfo = { ...movieData };

    if (selected) {
      newInfo.ids = newInfo.ids.filter((value) => value !== id);
      newInfo.number = newInfo.number.filter((value) => value !== number);
      setSelected(false);
      setMovieData(newInfo);
      return;
    }

    setSelected(!selected);
    newInfo.ids.push(id);
    newInfo.number.push(number);
    setMovieData(newInfo);
  };

  return <Seat onClick={handleSeatSelection}>{number}</Seat>;
}
