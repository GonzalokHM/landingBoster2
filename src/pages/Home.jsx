import React, { useState, useEffect, Suspense, useRef } from 'react'
import {
  Button,
  Slogan,
  SubTitle,
  Text,
  Flex,
  Form,
  FormLabel,
  FormInput,
  HomeStyled,
  List,
  ListElement
} from '../components/styles/ui'

const Comments = React.lazy(() => import('../components/CommentsApi'))

const Home = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [userData, setUserData] = useState({ nombre: '', correo: '' })
  const homeRef = useRef(null)

  const handleScroll = () => {
    const scrollY = window.scrollY
    const dynamicAngle = 25 + (scrollY % 360)
    const baseOpacity = 0.5
    const colorStartOpacity =
      baseOpacity + Math.abs(Math.sin(scrollY / 100) * 0.5)
    const colorEndOpacity =
      baseOpacity + Math.abs(Math.cos(scrollY / 100) * 0.5)
    if (homeRef.current) {
      homeRef.current.style.background = `linear-gradient(${dynamicAngle}deg, rgba(197, 93, 246,${colorStartOpacity}) ${
        scrollY % 100
      }%, rgba(186, 235, 255,${colorEndOpacity}) 100%)`
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const nombre = formData.get('nombre')
    const correo = formData.get('correo')
    setUserData({ nombre, correo })
    setIsFormSubmitted(true)
  }

  const handleGoButton = () => {
    document.getElementById('form').scrollIntoView()
  }

  return (
    <HomeStyled ref={homeRef}>
      {!isFormSubmitted ? (
        <Flex>
          <Flex>
            <Slogan>
              Unlock Your Service&apos;s Potential with Pro Landing Pages
            </Slogan>
            <Text $variant='primary'>
              Experience the Unparalleled Quality of Handcrafted, SEO-Optimized
              Landing Pages, Tailored to Your Unique Brand – No Templates, No
              AI, Just Real Expertise.
            </Text>
            <Button $variant='primary' onClick={handleGoButton}>
              GO
            </Button>
          </Flex>
          <Flex>
            <Flex>
              <SubTitle>3x your leads and sales</SubTitle>
              <List>
                <ListElement>🚀 Supercharge your online presence.</ListElement>
                <ListElement>
                  🔍 Get handcrafted, SEO-optimized landing pages tailored to
                  your brand.
                </ListElement>
                <ListElement>
                  📚 Unlock a FREE downloadable eBook covering everything you
                  need to know.
                </ListElement>
                <ListElement>
                  💡 Elevate your online marketing game with ease.
                </ListElement>
              </List>
            </Flex>
            <SubTitle $setColor='action'>Take the Next Step </SubTitle>
            <Flex $direction $padding='50'>
              <Text $align='left'>
                Elevate Your Strategy: Redefine Your Approach with Landing
                Booster
              </Text>
              <Form id='form' onSubmit={handleSubmit}>
                <FormLabel htmlFor='nombre'>Name:</FormLabel>
                <FormInput type='text' id='nombre' name='nombre' required />

                <FormLabel htmlFor='correo'>Email:</FormLabel>
                <FormInput type='email' id='correo' name='correo' required />

                <Button $variant='secondary' type='submit'>
                  Try Now
                </Button>
              </Form>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex>
          <Text $variant='fullWidth'>
            Gracias {userData.nombre}, te hemos enviado el eBook y más
            información a {userData.correo}.
          </Text>
          <Suspense fallback={<div>Cargando comentarios...</div>}>
            <Comments userEmail={userData.correo} />
          </Suspense>
        </Flex>
      )}
    </HomeStyled>
  )
}

export default Home
