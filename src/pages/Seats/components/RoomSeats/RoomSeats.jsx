import { useState } from "react";
import { Available, Selected, Unavailable } from "../Buttons";

export function RoomSeats({ id, number, isAvailable, info, setInfo }) {
  const [selected, setSelected] = useState(false);

  const componentProps = {
    id,
    number,
    info,
    setInfo,
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
