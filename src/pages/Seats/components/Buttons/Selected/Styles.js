import styled from "styled-components";

const Seat = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #8dd7cf;
  border: 1px solid #1aae9e;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
`;

export { Seat };
