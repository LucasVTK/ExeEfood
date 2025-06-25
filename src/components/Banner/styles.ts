import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cor3};
  border-radius: 16px;
  display: flex;

  a {
    color: ${cores.cor1};
    text-decoration: none;
    font-weight: bold;
    align-self: center;
    justify-content: center;
    max-width: 539px;
    text-align: center;
  }

  div {
    display: grid;
    grid-template-rows: auto auto;
  }
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LinkItem = styled.li`
  justify-content: center;
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`

export const Chamariz = styled.a`
  grid-row: 3;
  font-size: 36px;
`

export const Logo = styled.img`
  margin-top: 16px;
`

export const Fundo = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${cores.cor1};
  width: 100%;
  height: 384px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    height: 304px;
  }
`
