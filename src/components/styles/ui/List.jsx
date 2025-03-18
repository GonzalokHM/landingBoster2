import styled, { css } from 'styled-components'
import { desktop } from '../medias'

const commentsStyles = css`
  text-align: center;
  background-image: none;
  padding: ${({ theme }) => theme.spacing.sm};
  min-height: auto;
  min-width: auto;
  display: inline-flex;
  flex-wrap: nowrap;
`

const desktopStyles = css`
  min-height: 330px;
  min-width: 777px;
  margin: ${({ theme }) => theme.spacing.lg} 0
    ${({ theme }) => theme.spacing.xl} 0;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`

export const List = styled.ul`
  background-image: url(https://cdn.pixabay.com/photo/2022/08/08/14/45/smartphone-7372865_640.jpg);
  padding: 0px ${({ theme }) => theme.spacing.xl} 0 0;
  min-height: 190px;
  background-size: cover;
  margin: ${({ theme }) => theme.spacing.md} 0;
  border-radius: ${({ theme }) => theme.borderRadius.large};

  ${(props) => props.$commentsStyles && commentsStyles}

  ${desktop} {
    ${(props) => !props.$commentsStyles && desktopStyles}
  }
`
