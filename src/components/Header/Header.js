import React, { Component } from 'react'
import * as S from './styles'

export class Header extends Component {
  openMenuMobile = () => {
    const menu = document.getElementById('menuMobile')
    if (menu.style.display === 'block') {
      menu.style.display = 'none'
    } else {
      menu.style.display = 'block'
    }
  }

  render() {
    return (
      <S.Header>
        <div className="container">
          <div className="d-flex d-flex-space-between">
            <S.Logo alt="logo Demo Shop" />
            <S.MenuMobile onClick={this.openMenuMobile}>
              <S.MenuIcon />
              <S.LogoMobile alt="logo Demo Shop" />
              <div id="menuMobile" className="menu">
                <S.MenuItem>seção 1</S.MenuItem>
                <S.MenuItem>seção 2</S.MenuItem>
                <S.MenuItem>seção 3</S.MenuItem>
                <S.MenuItem>seção 4</S.MenuItem>
                <S.MenuItem>seção 5</S.MenuItem>
              </div>
            </S.MenuMobile>
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
