import styled from 'styled-components';
import { desktop, mobile } from '../styles/medias';

export const SubTitle = styled.h2`
 color: ${(props) =>
    props.$setColor === 'action' ? 'yellow' : '#716500bf'};
  font-size: 30px;
  margin: 10px;
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.14);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  ${mobile} {
    font-size: 24px;
    color: #035110;
  }
  ${desktop} {
    font-size: 38px;
    padding: 12px;
  }
`;
