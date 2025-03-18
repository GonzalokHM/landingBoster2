import styled from 'styled-components'
import { desktop } from '../medias'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: ${({ theme }) => theme.spacing.sm} 0
    ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background-color: ${({ theme }) => theme.colors.backgroundForm};
  box-shadow: ${({ theme }) => theme.shadows.boxShadowForm};
  backdrop-filter: ${({ theme }) => theme.blur.standard};
  border: 1px solid rgba(255, 255, 255, 0.12);
  ${desktop} {
    margin: ${({ theme }) => theme.spacing.md} 0
      ${({ theme }) => theme.spacing.xl};
    width: 250px;
  }
`
