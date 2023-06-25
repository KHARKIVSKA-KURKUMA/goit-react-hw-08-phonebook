import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin: 15px 0 30px;
  font-weight: 900;
  font-size: 2em;
  font-family: 'Lexend Peta', sans-serif;
`;
const SubTitle = styled.h2`
  text-align: center;
  margin: 15px 0 30px;
  font-weight: 900;
  font-size: 2em;
  font-family: 'Lexend Peta', sans-serif;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  gap: 30px;
`;

const Wrap = styled.div``;

export { Title, Container, Wrap, SubTitle };
