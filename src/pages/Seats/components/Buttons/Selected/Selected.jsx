import { Seat } from "./Styles";

export function Selected({ number, handleSeatSelection }) {
  return <Seat onClick={handleSeatSelection}>{number}</Seat>;
}
