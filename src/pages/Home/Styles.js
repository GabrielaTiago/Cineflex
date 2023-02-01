import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MoviesContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px 30px;
`;

export { Main, MoviesContainer };
