import styled from "styled-components";

const MovieWrapper = styled.div`
  width: 145px;
  height: 209px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

export { MovieWrapper, Poster };
