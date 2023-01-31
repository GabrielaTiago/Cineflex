import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const Day = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const Schedules = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export { Container, Day, Schedules };
