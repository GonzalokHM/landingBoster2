import styled,{css} from "styled-components";
import { mobile } from "../styles/medias";

const primaryButtonStyles = css`
    background-color: #ffffff;
    border-radius: 20px;
`
const secondaryButtonStyles = css`
    background-color: #9caa01b7;
    border-radius: 12px;
`

export const Button= styled.button`

color: black;
font-size: 20px;
border:0;
padding: 10px 15px;
cursor: pointer;
${mobile} {
font-size: 12px;
padding: 8px 12px;
}
${(props) => props.variant === "primary" && primaryButtonStyles}
  ${(props) => props.variant === "secondary" && secondaryButtonStyles}

&:hover {
    ${(props) => props.variant === "primary" && "background-color: lightblue;"}
    ${(props) => props.variant === "secondary" && "background-color: lightgreen;"}
    /* Agrega otros estilos de hover según sea necesario */
  }
`
