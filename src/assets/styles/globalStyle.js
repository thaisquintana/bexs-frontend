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
    background: #fff;
    -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, sans-serif;
    color: #000;
    font-size: 1rem;
    overflow-x: hidden;
  }
  button {
    cursor: pointer;
  }

  .d-flex {
    display: flex;
    &-space-between {
      justify-content: space-between;
    }
  }
  .container {
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }

`

export default GlobalStyle
