import styled from "styled-components";

const FooterStyles = styled.footer`
  width: 100%;
  height: 117px;
  padding: 14px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #dfe6ed;
  border-top: 1px solid #9eadba;
`;

const Movie = styled.div`
  width: 64px;
  height: 89px;
  padding: 8px;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  width: 100%;
  direction: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

const Title = styled.h4`
  font-size: 26px;
  line-height: 30.47px;
`;

const Schedule = styled.h6`
  font-size: 26px;
  line-height: 30.47px;
`;

export { FooterStyles, Movie, Poster, Info, Title, Schedule };
