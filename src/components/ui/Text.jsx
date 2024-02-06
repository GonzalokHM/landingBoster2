import styled from "styled-components";
import { mobile } from "../styles/medias";

export const Text = styled.p`
    font-size: 15px;
    text-align: center;
    color: ${(props) =>
    props.variant === "primary" ? "darckgreen" : "black"};
    padding: 5px;
    ${mobile} {
    font-size: 12px;
    padding: 1px
}
`