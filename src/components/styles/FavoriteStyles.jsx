import styled from 'styled-components'

export const FavoritesContainer = styled.main`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.backgroundFavorites};
  gap: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const RatingText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.ratingText};
  font-weight: bold;
`
