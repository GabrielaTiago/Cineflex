import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    min-width: 225px;
  }
`;

const TicketContainer = styled.div`
  width: 100%;
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export { Main, TicketContainer };
