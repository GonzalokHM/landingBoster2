import styled, { css } from 'styled-components';
import { desktop, mobile } from '../styles/medias';

const primaryButtonStyles = css`
  background-color: #24292f;
  color: azure;
  border-radius: 20px;
  margin: 34px 0 50px;
  box-shadow: 0 4px 20px 16px rgb(0 0 0 / 53%);
  border: 2px inset #fab216;
`;
const secondaryButtonStyles = css`
  background-color: #2aff00;
  color: black;
  border: outset;
  margin: 15px;
`;

export const Button = styled.button`
  font-size: 20px;
  border-radius: 12px;
  padding: 10px 15px;
  cursor: pointer;

  ${(props) => props.$variant === 'primary' && primaryButtonStyles}
  ${(props) => props.$variant === 'secondary' && secondaryButtonStyles}
  
  &:hover {
    ${(props) =>
      props.$variant === 'primary' &&
      'background-color: lightblue; color: black;'}
    ${(props) =>
      props.$variant === 'secondary' && 'background-color: lightgreen;'}
  }
  ${mobile} {
    font-size: 12px;
    padding: 8px 12px;
  }
  ${desktop} {
    font-size: 26px;
    ${(props) =>
      props.$variant === 'primary' &&
      'width: 100px; border: 2px outset #ff00dd;'}
    margin: ${(props) => (props.$commentsMarging ? '2px' : '2px 0 50px')};
    align-self: center;
    width: 150px;
  }
`;
