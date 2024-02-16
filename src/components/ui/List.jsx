import styled, { css } from 'styled-components';
import { desktop } from '../styles/medias';

const commentsStyles = css`
  text-align: center;
  background-image: none;
  padding: 5px;
  min-height: auto;
  min-width: auto;
  display: inline-flex;
  flex-wrap: nowrap;
`;

const desktopStyles = css`
  min-height: 330px;
  min-width: 777px;
  margin: 30px 0 74px 0;
  border: 2px solid #42b4ea;
`;

export const List = styled.ul`
  background-image: url(https://cdn.pixabay.com/photo/2022/08/08/14/45/smartphone-7372865_640.jpg);
  padding: 0px 145px 0 0;
  min-height: 190px;
  background-size: cover;
  margin: 20px 0 20px 0;
  border-radius: 20px;
 
  ${(props) => props.$commentsStyles && commentsStyles}

  ${desktop} {
    ${(props) => !props.$commentsStyles && desktopStyles}
  }

`;
