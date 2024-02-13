import styled from "styled-components";
import { desktop, mobile } from "../styles/medias";

export const Text = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    text-shadow:   ${(props) => props.$variant === "primary" ? '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' :
    '-1px -1px 0 deepskyblue, 1px -1px 0 deepskyblue, -1px 1px 0 deepskyblue, 1px 1px 0 deepskyblue'};
    color: ${(props) =>
    props.$variant === "primary" ? "deepskyblue" : "black"};
    padding: 5px;
    ${(props)=>
    props.$variant === "secondary" && "background-image: url(https://cdn.pixabay.com/photo/2022/08/08/14/45/smartphone-7372865_640.jpg)"};
    ${mobile} {
    font-size: 16px;
    padding: ${(props) =>
    props.$variant === "primary" ? "15px 10px 40px 92px" : "38px 151px 40px 10px"};
    text-align: ${(props) =>
    props.$variant === "primary" ? "right" : "left"};
}
${desktop} {
    font-size: 28px;
    padding: 30px;
    width: ${(props) =>
    props.$variant === "primary" ? "900px" : "460px"};
     text-align: ${(props) =>
    props.$align === "left" ? "left" : "center"};
}
`