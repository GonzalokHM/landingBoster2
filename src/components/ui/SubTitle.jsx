import styled from "styled-components";
import { desktop, mobile } from "../styles/medias";

export const SubTitle = styled.h2`

background-color:${(props)=> props.$background=== "action" ? "yellow" : "#00bfdb"};
color: black;
font-size: 30px;
margin: 10px;
border-radius: 20px;
padding: 5px;
text-align: center;
${mobile} {
    font-size: 24px;
    color: #035110
}
${desktop} {
    font-size: 38px;
    padding: 12px;
}
`