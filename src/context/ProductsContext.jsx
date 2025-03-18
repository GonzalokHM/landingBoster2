import PropTypes from 'prop-types'
import { useReducer, createContext } from 'react'

export const ProductContext = createContext()

const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const { product } = action
      const current = state[product.id] || {
        rating: 0,
        liked: false,
        ...product
      }
      return {
        ...state,
        [product.id]: { ...current, liked: true }
      }
    }
    case 'REMOVE_FAVORITE': {
      const { product } = action
      const current = state[product.id] || {
        rating: 0,
        liked: false,
        ...product
      }
      return {
        ...state,
        [product.id]: { ...current, liked: false }
      }
    }
    case 'UPDATE_RATING': {
      const { product, rating } = action
      const current = state[product.id] || {
        rating: 0,
        liked: false,
        ...product
      }
      return {
        ...state,
        [product.id]: { ...current, rating }
      }
    }
    default:
      return state
  }
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {})

  const addFavorite = (product) => {
    dispatch({ type: 'ADD_FAVORITE', product })
  }

  const removeFavorite = (product) => {
    dispatch({ type: 'REMOVE_FAVORITE', product })
  }

  const updateRating = (product, rating) => {
    dispatch({ type: 'UPDATE_RATING', product, rating })
  }

  return (
    <ProductContext.Provider
      value={{ state, addFavorite, removeFavorite, updateRating }}
    >
      {children}
    </ProductContext.Provider>
  )
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired
}
