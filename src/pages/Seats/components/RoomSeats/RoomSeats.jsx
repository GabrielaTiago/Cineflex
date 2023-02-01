import { useState } from "react";
import { Available, Selected, Unavailable } from "../Buttons";

export function RoomSeats({ id, number, isAvailable}) {
  const [selected, setSelected] = useState(false);

  const componentProps = {
    id,
    number,
    selected,
    setSelected,
  };

  let Component;

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
