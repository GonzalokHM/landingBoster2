import styled from 'styled-components'

export const StarsContainer = styled.div`
  display: flex;
`

export const Star = styled.span`
  font-size: 24px;
  cursor: pointer;
  color: ${({ $active }) => ($active ? 'gold' : 'gray')};
  transition: color 0.3s;
`
