import styled from 'styled-components'
import { mobile, desktop } from './medias'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm} 20px;
  position: relative;
  background: ${({ theme }) => theme.colors.headerBackground};
  flex: 0 0 auto;
`
export const Logo = styled.img`
  width: 60px;
  height: 60px;
  ${mobile} {
    width: 45px;
    height: 45px;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  text-align: center;
  ${mobile} {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.deaccent};
  }
  ${desktop} {
    font-size: 51px;
  }
`

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
  }

  ${mobile} {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background: #fff;
    width: 200px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 10px;
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  }
`

export const NavItem = styled.li`
  margin: 0 15px;
  ${mobile} {
    margin: 10px 0;
  }
`

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: ${({ theme }) => theme.colors.text};
    margin: 4px 0;
    transition: all 0.3s ease;
  }

  ${mobile} {
    display: flex;
  }
`
