import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBackground};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
`
