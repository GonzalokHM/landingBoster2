import styled from "styled-components";
import { desktop } from "../styles/medias";

export const FormLabel = styled.label`
    padding: 2px;
    font-style: italic;
    font-size: 12px;
    font-weight: bold;
    color: white;
    ${desktop}{
        font-size: 15px;
        text-align: left;
    }
`