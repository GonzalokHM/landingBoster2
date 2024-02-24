import { createGlobalStyle } from 'styled-components';

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
    background-color: #f9ff00bd; /* Color del thumb cuando el usuario pasa el ratón sobre él */
  }
  scrollbar-color: #00fffabd #bde6ffbf; /* Color del thumb y del track */
  scrollbar-width: thin; /* Ancho de la barra de desplazamiento */
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
  }
`;
