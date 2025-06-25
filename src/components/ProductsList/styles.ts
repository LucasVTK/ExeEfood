import styled from 'styled-components'

import { Props } from '.'
import { breakpoints, cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'clothes'>>`
  overflow-x: hidden;
  background-color: ${(props) =>
    props.background === 'cor1' ? cores.cor3 : cores.cor3};
`

export const List = styled.ul`
  display: grid;
  max-width: 1024px;
  grid-template-columns: 1fr 1fr;
  column-gap: 56px;
  grid-row-gap: 8px;
  margin-top: 8vh;
  margin-bottom: 8vh;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin: 32px 24px 0 24px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
