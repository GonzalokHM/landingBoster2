import { useState } from 'react'
import StarRating from '../components/StarRating'
import useProductContext from '../hooks/useProductsContext'
import {
  LikeButton,
  ProductCard,
  ProductDescription,
  ProductsContainer,
  ProductTitle
} from '../components/styles/ProductsStyle'

const Products = () => {
  const initialProducts = [
    { id: 1, name: 'basic', description: 'Descripción del producto 1' },
    { id: 2, name: 'standar', description: 'Descripción del producto 2' },
    { id: 3, name: 'pro', description: 'Descripción del producto 3' },
    { id: 4, name: 'enterprise', description: 'Descripción del producto 4' }
  ]

  const { state, addFavorite, removeFavorite, updateRating } =
    useProductContext()
  const [products] = useState(initialProducts)

  const getProductData = (product) => {
    return state[product.id] || { liked: false, rating: 0 }
  }
  return (
    <ProductsContainer>
      {products.map((product) => {
        const { liked, rating } = getProductData(product)
        return (
          <ProductCard key={product.id}>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <StarRating
              maxStars={5}
              initialRating={rating}
              onRate={(newRating) => updateRating(product, newRating)}
            />
            {liked ? (
              <LikeButton
                $liked={liked}
                onClick={() => removeFavorite(product)}
              >
                Quitar
              </LikeButton>
            ) : (
              <LikeButton $liked={liked} onClick={() => addFavorite(product)}>
                añadir a favotitos
              </LikeButton>
            )}
          </ProductCard>
        )
      })}
    </ProductsContainer>
  )
}

export default Products
