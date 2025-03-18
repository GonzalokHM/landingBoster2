import {
  FavoritesContainer,
  RatingText,
  Title
} from '../components/styles/FavoriteStyles'
import {
  ProductCard,
  ProductDescription,
  ProductTitle
} from '../components/styles/ProductsStyle'
import useProductContext from '../hooks/useProductsContext'

const FavoritesPage = () => {
  const { state } = useProductContext()
  const favorites = Object.values(state).filter((product) => product.liked)

  return (
    <FavoritesContainer>
      <Title>Favoritos</Title>
      {favorites.length === 0 ? (
        <p>No hay productos favoritos.</p>
      ) : (
        favorites.map((product) => (
          <ProductCard key={product.id}>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <RatingText>Rating: {product.rating} estrellas</RatingText>
          </ProductCard>
        ))
      )}
    </FavoritesContainer>
  )
}

export default FavoritesPage
