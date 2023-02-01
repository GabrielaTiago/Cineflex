import { Link } from "react-router-dom";
import { HeaderStyles, Title } from "./Styles";

export function Header() {
  return (
    <HeaderStyles>
      <Link to={"/"}>
        <Title>CINEFLEX</Title>
      </Link>
    </HeaderStyles>
  );
}
