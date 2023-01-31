import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  margin: 5% 0 135px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  font-size: 18px;
  line-height: 21px;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  width: 100%;
  height: 25px;
  margin-bottom: 2.5px;
`;

const Input = styled.input`
  width: 100%;
  min-width: 225px;
  height: 51px;
  padding: 2.5%;
  color: #293845;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #afafaf;
    font-style: italic;
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
`;



export { Form, Box, Label, Input };
