import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cor3};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.cor1};
    text-decoration: none;
    font-weight: bold;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li``

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`

export const Logo = styled.img`
  max-height: 23px;
`
