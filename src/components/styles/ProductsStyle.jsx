import styled from 'styled-components'

export const ProductsContainer = styled.main`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  background-color: rgb(0, 217, 255);
`

export const ProductCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

export const ProductTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.text};
`

export const ProductDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const LikeButton = styled.button`
  background-color: ${({ theme, $liked }) =>
    $liked ? theme.colors.likeActive : theme.colors.likeInactive};
  color: ${({ theme, $liked }) => ($liked ? '#fff' : theme.colors.text)};
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ $liked }) => ($liked ? '#e91e63' : '#ccc')};
  }
`
