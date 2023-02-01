import styled from "styled-components";

const Seat = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #c3cfd9;
  border: 1px solid #7b8b99;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
`;

export { Seat };
