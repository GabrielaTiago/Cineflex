import { Available, Selected, Unavailable } from "../Buttons";
import { Container, StatusCaption, StatusDiv } from "./Styles";

export function Caption() {
  return (
    <Container>
      <StatusDiv>
        <Selected number={""} />
        <StatusCaption>Selecionado</StatusCaption>
      </StatusDiv>
      <StatusDiv>
        <Available number={""} />
        <StatusCaption>Disponível</StatusCaption>
      </StatusDiv>
      <StatusDiv>
        <Unavailable number={""} />
        <StatusCaption>Indisponível</StatusCaption>
      </StatusDiv>
    </Container>
  );
}
