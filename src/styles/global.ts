import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    background: ${(props) => props.theme.BACKGROUND_BLUE_900};
  }

`
