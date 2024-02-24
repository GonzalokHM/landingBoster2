import styled from 'styled-components';
import { desktop, mobile, tablet } from '../styles/medias';

export const Carrusel = styled.div`
  display: flex;
  overflow-x: auto; /* Desbordamiento horizontal */
  background-color: rgba(255, 255, 255, 0.14);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;

  ${mobile} {
    max-width: 375px;
  }
  ${tablet} {
    max-width: 600px;
  }
  ${desktop} {
    max-width: fit-content;
  }
`;
