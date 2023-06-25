import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-family: 'Lexend Peta', sans-serif;
  background-color: #fdc886;
  color: #000000;
  padding: 10px;
  font-size: 16px;

  border: none;
  border-radius: 10px;
  transition: background-color 300ms linear;
  &:hover {
    background-color: #cfd382;
  }
`;

export { Input, Form, Label, Button };
