import styled from 'styled-components'

export const HomeStyled = styled.main.attrs(({ $scrollY }) => {
  const dynamicAngle = 25 + ($scrollY % 360)
  const baseOpacity = 0.5
  const colorStartOpacity =
    baseOpacity + Math.abs(Math.sin($scrollY / 100) * 0.5)
  const colorEndOpacity = baseOpacity + Math.abs(Math.cos($scrollY / 100) * 0.5)

  return {
    style: {
      background: `linear-gradient(${dynamicAngle}deg, rgba(197, 93, 246,${colorStartOpacity}) ${
        $scrollY % 100
      }%, rgba(186, 235, 255,${colorEndOpacity}) 100%)`
    }
  }
})`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 0.5s ease;
`
