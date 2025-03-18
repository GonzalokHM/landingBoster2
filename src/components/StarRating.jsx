import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Star, StarsContainer } from './styles/StartStyles'

const StarRating = ({ maxStars = 5, initialRating = 0, onRate }) => {
  const [rating, setRating] = useState(initialRating)

  useEffect(() => {
    setRating(initialRating)
  }, [initialRating])

  const handleClick = (index) => {
    setRating(index)
    onRate(index)
  }

  return (
    <StarsContainer>
      {[...Array(maxStars)].map((_, index) => (
        <Star
          key={index}
          $active={index < rating}
          onClick={() => handleClick(index + 1)}
        >
          ★
        </Star>
      ))}
    </StarsContainer>
  )
}

StarRating.propTypes = {
  maxStars: PropTypes.number,
  initialRating: PropTypes.number,
  onRate: PropTypes.func.isRequired
}

export default StarRating
