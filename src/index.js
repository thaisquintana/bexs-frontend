import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './assets/styles/globalStyle'

import App from './views/App'
import Header from './components/Header/Header'

ReactDOM.render(
  <>
    <Header />
    <App />
    <GlobalStyle />
  </>,

  document.getElementById('root')
)
