import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.cor1};
  color: ${cores.cor3};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '4px 8px' : '6px 8px')};
  display: inline-block;
  margin-left: 8px;
  margin-bottom: 4px;
`

export const TagContainerSmall = styled.div<Props>`
  position: absolute;
  right: 16px;
  top: 16px;
  background-color: ${cores.cor1};
  color: ${cores.cor3};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  display: inline-block;
  margin-left: 8px;
  margin-bottom: 4px;
`
