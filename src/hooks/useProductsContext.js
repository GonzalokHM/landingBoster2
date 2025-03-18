import { useContext } from 'react'
import { ProductContext } from '../context/ProductsContext'

const useProductContext = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
export default useProductContext
