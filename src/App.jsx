import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './pages/Products'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { GlobalStyles } from './components/styles/GlobalStyles'
import { Flex } from './components/styles/ui/Flex'
import { ProductProvider } from './context/ProductsContext'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <ProductProvider>
          <Header />
          <Flex>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/productos' element={<Products />} />
              <Route path='/favoritos' element={<Favorites />} />
            </Routes>
            <Footer />
          </Flex>
        </ProductProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
