import { useState } from "react";
import { useMoviesContext } from "../../../../contexts";
import { Available, Selected, Unavailable } from "../Buttons";

export function RoomSeats({ id, number, isAvailable }) {
  const { movieData, setMovieData } = useMoviesContext();
  const [selected, setSelected] = useState(false);
  let Component;
  
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

  const componentProps = {
    id,
    number,
    selected,
    setSelected,
    handleSeatSelection
  };


  switch (true) {
    case !isAvailable:
      Component = Unavailable;
      break;
    case selected:
      Component = Selected;
      break;
    default:
      Component = Available;
  }

  return <Component {...componentProps} />;
}
