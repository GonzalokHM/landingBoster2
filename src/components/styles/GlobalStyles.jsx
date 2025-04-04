import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  /* Estilos para las barras de desplazamiento */
   ::-webkit-scrollbar {
    width: 5px; 
  }
  ::-webkit-scrollbar-thumb {
  background-color: rgba(0, 255, 250, 0.7);
       border-radius: 10px;
      transition: background-color 0.3s ease;
    scrollbar-width: thin;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 255, 250, 0.9); 
  }
  scrollbar-color:rgba(0, 255, 250, 0.7) rgba(189, 230, 255, 0.75);; 
  scrollbar-width: thin; 
  }

  #root {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height:100vh;
  }

  body {
    font-family:  ${({ theme }) => theme.fonts.primary};
    line-height: 1.6;
  }
    main{
     flex: 1 1 auto;
    }
`
