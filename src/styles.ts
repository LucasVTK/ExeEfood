import { createGlobalStyle } from 'styled-components'

export const cores = {
  cor1: '#E66767;',
  cor2: '#FFEBD9',
  cor3: '#FFF8F2',
  cor4: '#FFFFFF'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '624px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    max-width: 100vw;
    overflow-x: hidden;
    text-decoration: none;
  }

  body {
    background-color: ${cores.cor2};
    color: ${cores.cor1};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
