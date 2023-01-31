import { Seat } from "./Styles";

export function Selected({ id, number, info, setInfo, selected, setSelected }) {
  const handleSeatSelection = () => {
    let newInfo = { ...info };

    if (selected) {
      newInfo.ids = newInfo.ids.filter((value) => value !== id);
      newInfo.number = newInfo.number.filter((value) => value !== number);
      setSelected(false);
      setInfo(newInfo);
      return;
    }

    setSelected(!selected);
    newInfo.ids.push(id);
    newInfo.number.push(number);
    setInfo(newInfo);
  };

  return <Seat onClick={handleSeatSelection}>{number}</Seat>;
}
