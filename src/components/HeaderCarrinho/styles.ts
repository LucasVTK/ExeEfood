import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cor3};
  border-radius: 16px;
  display: flex;
  justify-content: center;

  a {
    color: ${cores.cor1};
    text-decoration: none;
    font-weight: bold;
    align-items: center;
    font-size: 18px;
  }

  div {
    height: 184px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    max-width: 1024px;

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: auto;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`

export const LinksLogo = styled.ul`
  display: flex;
  justify-content: center;
`

export const LinkItem = styled.li`
  justify-content: center;
`

export const LinkCart = styled.a`
  display: flex;
  justify-content: flex-end;
`

export const Logo = styled.img`
  justify-content: center;
`

export const Fundo = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${cores.cor1};
  width: 100%;
  height: 160px;
  align-items: center;
  justify-content: space-around;
`
