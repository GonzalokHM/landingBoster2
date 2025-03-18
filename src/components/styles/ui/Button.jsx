import styled, { css } from 'styled-components'
import { desktop, mobile } from '../medias'

const primaryButtonStyles = css`
  background-color: ${({ theme }) => theme.button.primary.backgroundColor};
  color: ${({ theme }) => theme.button.primary.color};
  border-radius: ${({ theme }) => theme.button.primary.borderRadius};
  margin: ${({ theme }) => theme.button.primary.margin};
  box-shadow: ${({ theme }) => theme.button.primary.boxShadow};
  border: ${({ theme }) => theme.button.primary.border};
`
const secondaryButtonStyles = css`
  background-color: ${({ theme }) => theme.button.secondary.backgroundColor};
  color: ${({ theme }) => theme.button.secondary.color};
  border: ${({ theme }) => theme.button.secondary.border};
  margin: ${({ theme }) => theme.button.secondary.margin};
`

export const Button = styled.button`
  font-size: 20px;
  border-radius: 12px;
  padding: 10px 15px;
  cursor: pointer;

  ${(props) => props.$variant === 'primary' && primaryButtonStyles}
  ${(props) => props.$variant === 'secondary' && secondaryButtonStyles}
  
  &:hover {
    ${(props) =>
      props.$variant === 'primary' &&
      'background-color: lightblue; color: black;'}
    ${(props) =>
      props.$variant === 'secondary' && 'background-color: lightgreen;'}
  }
  ${mobile} {
    font-size: 12px;
    padding: 8px 12px;
  }
  ${desktop} {
    font-size: 26px;
    ${(props) =>
      props.$variant === 'primary' &&
      'width: 100px; border: 2px outset #ff00dd;'}
    margin: ${(props) => (props.$commentsMarging ? '2px' : '2px 0 50px')};
    align-self: center;
    width: 150px;
  }
`
