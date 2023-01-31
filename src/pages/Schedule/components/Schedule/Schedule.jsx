import { Link } from "react-router-dom";
import { Button } from "./Styles";

export function Schedule({ id, time }) {
  return (
    <Link to={`/assento/${id}`}>
      <Button>{time}</Button>
    </Link>
  );
}
