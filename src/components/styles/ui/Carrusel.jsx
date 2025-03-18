import styled from 'styled-components'
import { desktop, mobile, tablet } from '../medias'

export const Carrusel = styled.div`
  display: flex;
  overflow-x: auto; /* Desbordamiento horizontal */
  background-color: rgba(255, 255, 255, 0.14);
  box-shadow: ${({ theme }) => theme.shadows.boxShadowForm};
  backdrop-filter: ${({ theme }) => theme.blur.standard};
  border: ${({ theme }) => theme.borders.primary};
  border-radius: ${({ theme }) => theme.borderRadius.large};

  ${mobile} {
    max-width: 375px;
  }
  ${tablet} {
    max-width: 600px;
  }
  ${desktop} {
    max-width: fit-content;
  }
`
