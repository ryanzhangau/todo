import styled from 'styled-components';

export const Todo = styled.section`
  display: grid;
  grid-template-columns: 1fr 30px 30px 30px;
  grid-template-rows: 50px;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  &:nth-child(even) {
    background-color: #e8e8e8;
  }
`;

export const TodoHead = styled.header`
  display: grid;
  grid-template-columns: 1fr 60px;
  grid-template-rows: 50px;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  background-color: #4c96f3;
  align-items: center;
  padding: 0 15px;
  color: white;
`;

export const TodoFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 30px 30px;
  grid-template-rows: 50px;
  margin: 0 auto 10px;
  max-width: 800px;
  width: 100%;
  align-items: center;
  padding: 0 15px;
`;
