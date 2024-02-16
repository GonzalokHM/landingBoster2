import styled from "styled-components";
import { desktop, mobile } from "../styles/medias";

export const Title = styled.h1`
color: black;
font-size: 40px;
text-align: center;
${mobile} {
    font-size: 30px;
    color: #7c036c
}
${desktop} {
    font-size: 51px;
}
`