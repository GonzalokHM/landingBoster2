import styled from "styled-components";

export const Button= styled.button`
background-color: ${props => props.background === 'primary' ? 'blue' : 'green'};
color: black;
font-size: 20px;
border:0;
padding: 10px 15px;
cursor: pointer`
