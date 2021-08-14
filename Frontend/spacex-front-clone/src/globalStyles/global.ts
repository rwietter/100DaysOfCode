import WebFont from 'webfontloader'
import { createGlobalStyle } from 'styled-components'

WebFont.load({
  custom: {
    families: [`DinPRO`],
    urls: [`../assets/fonts/dinpro-bold.otf`, `../assets/fonts/DINPro-Light.ttf`]
  }
})

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%100%;
    width: 100%;
  }

  body {
    font-family: 'DinPRO', Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 62%;
  }
`
