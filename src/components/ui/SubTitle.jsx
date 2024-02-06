import styled from "styled-components";
import { mobile } from "../styles/medias";

export const SubTitle = styled.h2`

background-color:${(props)=> props.$background=== "action" ? "yellow" : "blue"};
color: black;
font-size: 28px;
text-align: center;
${mobile} {
    font-size: 20px;
    color: #035110
}
`