import { useState } from 'react';
import { Button } from './ui/Button';
import { Title } from './ui/Title';
import { SubTitle } from './ui/SubTitle';
import { Text } from './ui/Text';
import { Flex } from './ui/Flex';
import { Form } from './ui/Form';
import { FormLabel } from './ui/FormLabel';
import { FormInput } from './ui/FormInput';

const Main = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userData, setUserData] = useState({ nombre: '', correo: '' });

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
    <main>
        {!isFormSubmitted ? (
      <Flex>
        <Flex>
          <Title>
            Unlock Your Service&apos;s Potential with Pro Landing Pages
          </Title>
          <Text $variant="primary">
            Experience the Unparalleled Quality of Handcrafted, SEO-Optimized
            Landing Pages, Tailored to Your Unique Brand – No Templates, No AI,
            Just Real Expertise.
          </Text>
        </Flex>
          <Flex>
            <Button $variant="primary" onClick={handleGoButton}>
              Go
            </Button>
            <Flex>
              <SubTitle>3x your leads and sales</SubTitle>
              <Text>
                Ready to supercharge your service&apos;s online presence?
                Discover the power of our handcrafted, SEO-optimized landing
                pages that are tailored exclusively to your brand. By taking the
                next step and filling out the form with your name and email,
                you&apos;re not only gaining access to a wealth of knowledge
                about landing pages but also unlocking a FREE downloadable
                eBook, a comprehensive guide that covers everything you need to
                know to make your landing pages truly effective. Don&apos;t
                miss out on this opportunity to elevate your online marketing
                game. Simply fill in your details below and click &apos;Try
                Now&apos; to get started. Your path to successful landing
                pages begins here.
              </Text>
            </Flex>
            <SubTitle $background="action">Take the Next Step </SubTitle>
            <Form id="form" onSubmit={handleSubmit}>
              <FormLabel htmlFor="nombre">Nombre completo:</FormLabel>
              <FormInput type="text" id="nombre" name="nombre" required />

              <FormLabel htmlFor="correo">Correo electrónico:</FormLabel>
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
    </main>
  );
};

export default Main
