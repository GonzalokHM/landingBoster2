import styled from "styled-components";
import { desktop, mobile } from "../styles/medias";

export const ListElement = styled.li`
    font-size: 15px;
    text-align: left;
    padding: 10px 5px;
    list-style: none;
    ${mobile} {
    font-size: 12px;
    }
    ${desktop} {
        width: 477px;
        font-size: 27px;
    }
`