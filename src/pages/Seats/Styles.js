import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SeatsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 0 3%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  aspect-ratio: 16/9;
`;

export { Main, SeatsContainer, Container };
