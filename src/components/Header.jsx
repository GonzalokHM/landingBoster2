import { Title } from "./ui/Title"
import { Logo } from "./ui/Logo"
import { HeaderContainer } from "./ui/HeaderStyle"

const Header = () => {
  return (
    <HeaderContainer>
        <Title>LandingBooster</Title>
        <Logo src="https://cdn-icons-png.flaticon.com/512/11744/11744612.png" alt="booster icon" />
    </HeaderContainer>
  )
}

export default Header