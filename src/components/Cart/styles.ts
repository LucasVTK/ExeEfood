import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import fechar from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.cor1};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    height: 24px;
    color: ${cores.cor1};
    font-size: 14px;
    background-color: ${cores.cor2};
    border-radius: 0;
    padding: 0;
  }

  h1,
  h3,
  label {
    color: ${cores.cor2};
  }

  small {
    color: black;
    text-decoration: underline;
    font-size: 12px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100vw;
  }
`

export const Prices = styled.p`
  display: flex;
  font-size: 14px;
  color: ${cores.cor3};
  margin: 16px 0 16px;
  justify-content: space-between;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cor3};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.cor3};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 2px solid ${cores.cor3};
  padding: 8px 0;
  position: relative;
  background-color: ${cores.cor2};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 0 8px;
  }

  h3 {
    color: ${cores.cor1};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    padding-top: 16px;
    display: block;
    color: ${cores.cor1};
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    color: ${cores.cor3};
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const Row = styled.div`
  display: block;
  column-gap: 24px;
  margin-top: 16px;
  margin-bottom: 24px;
  align-items: flex-end;
`

export const InputGroup = styled.div`
  flex: auto;

  max-width: auto;

  label {
    font-size: 14px;
    margin-top: 4px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${cores.cor3};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.cor3};
    border-bottom: 1px solid ${cores.cor1};
    width: 100%;

    &.error {
      border: 1px solid red;
    }

    &:focus {
      outline: none;
    }
  }
`

export const NextPrevious = styled.div`
  > button {
    border: none;
    margin-bottom: 8px;
    cursor: pointer;
  }
`

export const Fracao = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
`

export const Realizado = styled.div`
  margin-bottom: 24px;

  > div {
    font-size: 14px;
    color: ${cores.cor2};
    padding-top: 24px;
  }
`
