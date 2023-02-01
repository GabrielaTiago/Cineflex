import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  max-width: 225px;
  height: 42px;
  margin-top: 35px;
  color: #ffffff;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.04em;
  letter-spacing: 0.04em;
  background-color: #e8833a;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
  :disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;

export { Btn };
