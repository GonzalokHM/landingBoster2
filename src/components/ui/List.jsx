import styled from "styled-components";
import { desktop } from "../styles/medias";

export const List = styled.ul`
    background-image: url(https://cdn.pixabay.com/photo/2022/08/08/14/45/smartphone-7372865_640.jpg);
    padding: 0px 145px 0 0;
    min-height: 190px;
    background-size: cover;
    margin: 20px 0 20px 0;
    border-radius:20px;
    ${desktop} {
    padding: 0px 145px 0 0;
    min-height: 330px;
    min-width: 777px;
    margin: 30px 0 74px 0;
    }
`