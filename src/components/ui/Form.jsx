import styled from "styled-components";
import { desktop } from "../styles/medias";

export const Form =styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 10px 0 20px;
    padding: 10px;
    border-radius: 15px;
    background-color:rgba(255, 255, 255, 0.14);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    ${desktop} {
        margin: 12px 0 30px;
        width: 250px;
    }
`