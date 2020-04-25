import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'

export const Header = styled.header`
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`

export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  margin-top: 20px;
`

export const Menu = styled.ul`
  padding-left: 0;
  margin-top: 32px;
  list-style: none;
  display: inline-flex;
`

export const MenuItem = styled.li`
  color: #808080;
  margin: 0 20px;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`
