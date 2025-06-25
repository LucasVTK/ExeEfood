import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  display: flex;
  justify-content: center;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100vw;
  height: 282px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${cores.cor1};

  .container {
    position: relative;
    padding-top: 360px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Alinhar = styled.div`
  max-width: 1042px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100vw;
  height: 282px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${cores.cor1};
`

export const Titulo = styled.h2`
  font-size: 32px;
  grid-row: 3;
  font-weight: bold;
  align-self: center;
  color: ${cores.cor4};
`

export const Precos = styled.p`
  font-weight: 100;
  font-size: 32px;
  margin-top: 24px;
  align-self: center;
  color: ${cores.cor4};

  span {
    text-decoration: line-through;
  }
`
