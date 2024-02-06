import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import { Flex } from './components/ui/Flex';

function App() {
  return (
    <Flex>
      <Header />
      <Main />
      <Footer />
    </Flex>
  );
}

export default App;
