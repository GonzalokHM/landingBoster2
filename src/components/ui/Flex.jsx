import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:${(props)=> props.$padding ? `${props.$padding}px` : "0"};
    margin: 0;

`