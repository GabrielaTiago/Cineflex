import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StatusDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

const StatusCaption = styled.p`
  color: #4e5a65;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.013em;
`;

export { Container, StatusDiv, StatusCaption };
