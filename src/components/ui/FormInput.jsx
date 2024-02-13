import styled from "styled-components";
import { desktop } from "../styles/medias";

export const FormInput = styled.input`
    padding: 5px;
    font-size: 12px;
    font-style: italic;
    margin: 5px;
    ${desktop} {
        padding: 6px;
        font-size: 18px;
    }
`