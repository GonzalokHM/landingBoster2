import styled from 'styled-components'

export const FooterStyle = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBackground};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
  width: 100%;
  flex: 0 0 auto;
`
