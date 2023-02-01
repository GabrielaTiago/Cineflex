import { Seat } from "./Styles";

export function Available({ number, handleSeatSelection }) {
  return <Seat onClick={handleSeatSelection}>{number}</Seat>;
}
