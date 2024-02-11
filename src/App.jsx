import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import { Flex } from './components/ui/Flex';
import { GlobalStyles } from './components/ui/GlobalStyles';

function App() {
  return (
    <>
    <GlobalStyles/>
    <Flex>
      <Header />
      <Main />
      <Footer />
    </Flex>
    </>
  );
}

export default App;
