import styled from 'styled-components'
import { desktop } from '../medias'

export const FormInput = styled.input`
  padding: ${({ theme }) => theme.spacing.xs};
  font-size: 12px;
  font-style: italic;
  margin: ${({ theme }) => theme.spacing.xs};
  ${desktop} {
    padding: ${({ theme }) => theme.spacing.sm};
    font-size: 18px;
  }
`
