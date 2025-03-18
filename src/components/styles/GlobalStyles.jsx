import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  /* Estilos para las barras de desplazamiento */
   ::-webkit-scrollbar {
    width: 5px; /* Ancho de la barra de desplazamiento */
  }
  ::-webkit-scrollbar-thumb {
    background-color: #00fffabd; /* Color del thumb (la parte que el usuario puede arrastrar) */
    scrollbar-width: thin;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #f9ff00bd; 
  }
  scrollbar-color: #00fffabd #bde6ffbf; 
  scrollbar-width: thin; 
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family:  ${({ theme }) => theme.fonts.primary};
    line-height: 1.6;
    overflow-x: hidden;
  }
`
