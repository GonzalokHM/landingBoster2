import styled, { css } from "styled-components";
import { desktop, mobile } from "../styles/medias";


const commentsCards = css`
  flex: 0 0 auto;
  margin-right: 10px;
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white; 
  padding: 20px;
  max-width: 44vw; 
  &:first-child {
    margin-left: 5px;
  }
`;

const desktopStyles = css`
            width: 477px;
        font-size: ${(props) => props.$small ?  "15px" : "27px" }  ;
        font-weight: bold;
`

export const ListElement = styled.li`
    font-size: ${(props) => props.$small ?  "12px" : "15px" };
    text-align: left;
    padding: 10px 5px;
    list-style: none;

    ${(props) => props.$cards && commentsCards}

${desktop} {
  ${(props) => !props.$cards && desktopStyles}
}

    ${mobile} {
    font-size: 12px;
    }
`