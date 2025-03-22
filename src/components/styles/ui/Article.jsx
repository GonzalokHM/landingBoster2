import styled from 'styled-components'

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.$padding ? `${props.$padding}px` : '0')};
  margin: 0;
`
