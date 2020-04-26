import React, { Component } from 'react'
import * as S from './styles'

export class Header extends Component {
  render() {
    return (
      <S.Header>
        <div className="container">
          <div className="d-flex d-flex-space-between">
            <S.Logo alt="logo Demo Shop" />
            <S.Menu>
              <S.MenuItem>seção 1</S.MenuItem>
              <S.MenuItem>seção 2</S.MenuItem>
              <S.MenuItem>seção 3</S.MenuItem>
              <S.MenuItem>seção 4</S.MenuItem>
              <S.MenuItem>seção 5</S.MenuItem>
            </S.Menu>
          </div>
        </div>
      </S.Header>
    )
  }
}

export default Header
