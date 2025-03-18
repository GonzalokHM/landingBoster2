import styled from 'styled-components'

export const FavoritesContainer = styled.main`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`

export const Title = styled.h1`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const RatingText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.ratingText};
  font-weight: bold;
`
