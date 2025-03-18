import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HeaderContainer,
  Logo,
  Title,
  NavMenu,
  NavItem,
  Hamburger
} from './styles/HeaderStyle'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <HeaderContainer>
      <Link
        to='/'
        onClick={() => setIsOpen(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}
      >
        <Title>LandingBooster</Title>
        <Logo
          src='https://cdn-icons-png.flaticon.com/512/11744/11744612.png'
          alt='booster icon'
        />
      </Link>

      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <NavMenu $isOpen={isOpen}>
        <NavItem>
          <Link to='/' onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/productos' onClick={() => setIsOpen(false)}>
            Productos
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/favoritos' onClick={() => setIsOpen(false)}>
            Favoritos
          </Link>
        </NavItem>
      </NavMenu>
    </HeaderContainer>
  )
}

export default Header
