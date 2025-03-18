import styled, { css } from 'styled-components'
import { desktop, mobile } from '../medias'

const commentsCards = css`
  flex: 0 0 auto;
  margin-right: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md};
  max-width: 44vw;
  &:first-child {
    margin-left: ${({ theme }) => theme.spacing.sm};
  }
`

const desktopStyles = css`
  width: 477px;
  font-size: ${(props) => (props.$small ? '15px' : '27px')};
  font-weight: bold;
`

export const ListElement = styled.li`
  font-size: ${(props) => (props.$small ? '12px' : '15px')};
  text-align: left;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xs};
  list-style: none;

  ${(props) => props.$cards && commentsCards}

  ${desktop} {
    ${(props) => !props.$cards && desktopStyles}
  }

  ${mobile} {
    font-size: 12px;
  }
`
