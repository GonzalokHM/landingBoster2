import styled from "styled-components";
import { desktop } from '../styles/medias';

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:${(props)=> props.$padding ? `${props.$padding}px` : "0"};
    margin: 0;

    ${desktop}{
        flex-direction: ${(props) => props.$direction ?  "row" : "column" };
    }

`