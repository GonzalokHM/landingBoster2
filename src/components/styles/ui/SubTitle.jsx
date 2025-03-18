import styled from 'styled-components'
import { desktop, mobile } from '../medias'

export const SubTitle = styled.h2`
  font-weight: bold;
  text-shadow: ${({ $setColor }) =>
    $setColor === 'action'
      ? '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
      : '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff'};
  color: ${({ theme, $setColor }) =>
    $setColor === 'action' ? theme.colors.accent : theme.colors.textSecondary};
  font-size: 30px;
  margin: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xs};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgroundForm};
  box-shadow: ${({ theme }) => theme.shadows.boxShadowForm};
  backdrop-filter: ${({ theme }) => theme.blur.standard};
  border: ${({ theme }) => theme.borders.primary};
  ${mobile} {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.subTitle};
  }
  ${desktop} {
    font-size: 38px;
    padding: ${({ theme }) => theme.spacing.md};
  }
`
