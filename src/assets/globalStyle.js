import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    height: 100%;
    text-rendering: optimizeLegibility;
    background: #47286E;
    -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    font-size: 1rem;
    overflow-x: hidden;
  }
  button {
    cursor: pointer;
  }
`

export default GlobalStyle
