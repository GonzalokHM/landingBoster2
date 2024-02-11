import styled, { css } from 'styled-components';
import { desktop, mobile } from '../styles/medias';

const primaryButtonStyles = css`
  background-color: black;
  color: azure;
  border-radius: 20px;
  margin: 2px 0 50px;
`;
const secondaryButtonStyles = css`
  background-color: #2aff00;
  color: black;
  border-radius: 12px;
  border: outset;
`;

export const Button = styled.button`
  font-size: 20px;
  border: 0;
  border-radius: 12px;
  padding: 10px 15px;
  margin: 15px;
  cursor: pointer;
  ${mobile} {
    font-size: 12px;
    padding: 8px 12px;
  }
  ${(props) => props.$variant === 'primary' && primaryButtonStyles}
  ${(props) => props.$variant === 'secondary' && secondaryButtonStyles}

&:hover {
    ${(props) => props.$variant === 'primary' && 'background-color: lightblue; color: black;'}
    ${(props) =>
      props.$variant === 'secondary' && 'background-color: lightgreen;'}
  }
  ${desktop} {
    font-size: 26px;
    ${(props) => props.$variant === 'primary' && 'width: 100px; border: 2px solid #ff00dd;'}
  }
`;
