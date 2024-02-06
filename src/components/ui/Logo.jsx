import styled from 'styled-components';
import { mobile } from '../styles/medias';

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  ${mobile} {
    width: 45px;
    height: 45px;
  }
`;
