import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.cor2};
  padding: 32px 0;
  font-size: 14px;
  justify-content: center;
  display: grid;
  text-align: center;
`

export const SectionTitle = styled.h4`
  color: ${cores.cor1};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  color: ${cores.cor1};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  max-width: 45vw;
  justify-content: center;
  display: grid;
`

export const Logo = styled.img`
  justify-self: center;
  padding-bottom: 16px;
`

export const RedesSociais = styled.img`
  justify-self: center;
  padding-bottom: 48px;
`

export const CopyRight = styled.p`
  font-size: 10px;
  margin-top: 32px;
  max-width: 480px;
  font-weight: 400;
`
