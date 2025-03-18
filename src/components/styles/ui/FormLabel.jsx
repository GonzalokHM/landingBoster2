import styled from 'styled-components'
import { desktop } from '../medias'

export const FormLabel = styled.label`
  padding: ${({ theme }) => theme.spacing.xs};
  font-style: italic;
  font-size: 12px;
  font-weight: bold;
  color: white;
  ${desktop} {
    font-size: 15px;
    text-align: left;
  }
`
