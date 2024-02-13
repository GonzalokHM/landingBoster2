import styled from 'styled-components';

import { desktop, mobile } from '../styles/medias';

export const Slogan = styled.h2`
  background-image: url(https://usercontent.one/wp/www.rendimientomaximo.com/wp-content/uploads/2023/05/Diseno-sin-titulo-3-1024x1024.jpg);
  min-height: 795px;
  min-width: 600px;
  color: #ffffff;
  font-size: 28px;
  text-align: center;
  background-size: cover;
  font-style: italic;
  border-radius: 20px;
  padding-top: 40px;
  ${mobile} {
    font-size: 21px;
    min-height: 440px;
    min-width: 350px;
  }
  ${desktop} {
    font-size: 48px;
    min-width: 900px;
    text-transform: uppercase;
    margin-top: 3px;
  }
`;
