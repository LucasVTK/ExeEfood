import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

import { Props } from '.'

export const TagContainerBuy = styled.div<Props>`
  background-color: ${cores.cor3};
  color: ${cores.cor1};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 48px' : '6px 8px')};
`

export const TagContainerComprar = styled.div<Props>`
  position: absolute;
  bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 218px;
  height: 24px;
  background-color: ${cores.cor3};
  color: ${cores.cor1};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;

  @media (max-width: ${breakpoints.desktop}) {
    position: initial;
    margin-left: 4px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    position: initial;
  }
`
