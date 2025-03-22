import { Link } from 'react-router-dom'
import { NotFoundContainer } from '../components/styles/NotFoundStyles'
import { SubTitle, Text } from '../components/styles/ui'

const NotFound = () => {
  return (
    <NotFoundContainer>
      <SubTitle>Página no encontrada</SubTitle>
      <Text>La página que buscas no existe o ha sido movida.</Text>
      <Link to='/'>Volver al inicio</Link>
    </NotFoundContainer>
  )
}

export default NotFound
