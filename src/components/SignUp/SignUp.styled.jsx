import styled from 'styled-components';
import bgImg from '../../img/RegisterBgBigImg.png';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #f5f2ea;
  width: 100vw;
  position: fixed;
  height: 100vh;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 30px;
`;

export const SignUpWrap = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  max-width: 450px;
  border-radius: 30px;
  margin-right: 100px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: #cfd382;
  }
  .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #83bc64;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 0;
  font-family: 'Lexend Peta', sans-serif;
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
`;

export const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #fdc886;
  color: #000000;
  border: none;
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  font-weight: 700;
  font-family: 'Lexend Peta', sans-serif;
`;

export const SignInWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;
export const SignInLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-weight: 700;
  font-family: 'Lexend Peta', sans-serif;
  transition: color 300ms linear;
  &:hover,
  &:focus {
    color: #cfd382;
  }
`;
export const SignInDecr = styled.p`
  font-family: 'Lexend Peta', sans-serif;
`;

export const Decr = styled.p`
  font-size: 18px;
  text-align: center;
  font-family: 'Lexend Peta', sans-serif;
`;
