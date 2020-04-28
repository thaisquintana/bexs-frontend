import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import { device } from '../../assets/styles/device'
import menu from '../../assets/images/bars-solid.svg'

export const Header = styled.header`
  height: 77px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  @media ${device.laptopXS} {
    height: 80px;
  }
`
export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  margin-top: 20px;
  display: none;
  @media ${device.laptopXS} {
    display: block;
  }
`

export const LogoMobile = styled.img.attrs({
  src: `${logo}`,
})`
  margin-top: 0;
  margin-left: 48px;
  @media ${device.laptopXS} {
    display: none;
  }
`
export const Menu = styled.ul`
  display: none;
  @media ${device.laptopXS} {
    display: block;
    padding-left: 0;
    margin-top: 32px;
    list-style: none;
    display: inline-flex;
  }
`
export const MenuItem = styled.li`
  color: #808080;
  margin: 10px 20px;
  cursor: pointer;

  &:hover {
    color: #000;
  }
  @media ${device.laptopXS} {
    margin: 0 20px;
  }
`
export const MenuIcon = styled.img.attrs({
  src: `${menu}`,
})`
  position: relative;
  top: 0;
  left: 20px;
  width: 8%;
`
export const MenuMobile = styled.ul`
  display: block;
  padding: 15px 20px;
  background-color: #fff;
  position: fixed;
  z-index: 7;
  width: 100%;
  list-style: none;
  padding-left: 0;
  box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.4);

  #menuMobile {
    display: none;
  }

  .menu {
    display: grid;
    width: 100%;
    padding: 16px 0;
    a {
      color: #fff;
      font-size: 0.9rem;
      text-decoration: none;
      margin: 10px 0;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  @media ${device.laptopXS} {
    display: none;
  }
`
Header.defaultProps = {
  'data-id': 'Header',
}
Logo.defaultProps = {
  'data-id': 'Logo',
}
MenuIcon.defaultProps = {
  'data-id': 'MenuIcon',
}
Menu.defaultProps = {
  'data-id': 'Menu',
}
MenuItem.defaultProps = {
  'data-id': 'MenuItem',
}
MenuMobile.defaultProps = {
  'data-id': 'MenuMobile',
}
