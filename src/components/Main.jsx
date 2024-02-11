import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Slogan } from './ui/Slogan';
import { SubTitle } from './ui/SubTitle';
import { Text } from './ui/Text';
import { Flex } from './ui/Flex';
import { Form } from './ui/Form';
import { FormLabel } from './ui/FormLabel';
import { FormInput } from './ui/FormInput';
import { MainStyled } from './ui/MainStyled';
import { List } from './ui/List';
import { ListElement } from './ui/ListElement';

const Main = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userData, setUserData] = useState({ nombre: '', correo: '' });

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar el envío del formulario
    // Capturar los datos del formulario
    const nombre = event.target.nombre.value;
    const correo = event.target.correo.value;
    setUserData({ nombre, correo }); // Guardar los datos del usuario
    setIsFormSubmitted(true); // Cambiar el estado para mostrar el mensaje de agradecimiento
  };

  const handleGoButton = () => {
    // Implementación para llevar al usuario hacia el formulario
    document.getElementById('form').scrollIntoView();
  };

  return (
    <MainStyled $scrollY={scrollY/10}>
      {!isFormSubmitted ? (
        <Flex>
          <Flex>
            <Slogan>
              Unlock Your Service&apos;s Potential with Pro Landing Pages
            </Slogan>
            <Text $variant="primary">
              Experience the Unparalleled Quality of Handcrafted, SEO-Optimized
              Landing Pages, Tailored to Your Unique Brand – No Templates, No
              AI, Just Real Expertise.
            </Text>
            <Button $variant="primary" onClick={handleGoButton}>
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
                <ListElement>💡 Elevate your online marketing game with ease.</ListElement>
              </List>
            </Flex>
            <SubTitle $background="action">Take the Next Step </SubTitle>
            <Text>
             Elevate Your Strategy: Redefine Your Approach with Landing Booster
            </Text>
            <Form id="form" onSubmit={handleSubmit}>
              <FormLabel htmlFor="nombre">Name:</FormLabel>
              <FormInput type="text" id="nombre" name="nombre" required />

              <FormLabel htmlFor="correo">Email:</FormLabel>
              <FormInput type="email" id="correo" name="correo" required />

              <Button $variant="secondary" type="submit">
                Try Now
              </Button>
            </Form>
          </Flex>
        </Flex>
      ) : (
        <Flex>
          <Text>
            Gracias {userData.nombre}, te hemos enviado el eBook y más
            información a {userData.correo}.
          </Text>
        </Flex>
      )}
    </MainStyled>
  );
};

export default Main;
