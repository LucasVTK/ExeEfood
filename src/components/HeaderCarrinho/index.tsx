import { Link } from 'react-router-dom'

import {
  HeaderBar,
  Links,
  LinkItem,
  LinkCart,
  Logo,
  Fundo,
  LinksLogo
} from './styles'

import efood from '../../assets/images/efood.png'
import fundo from '../../assets/images/fundo.png'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const HeaderCarrinho = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
      <Fundo>
        <Links>
          <LinkItem>
            <Link to="/">Restaurantes</Link>
          </LinkItem>
        </Links>
        <LinksLogo>
          <LinkItem>
            <Link to="/">
              <Logo src={efood} />
            </Link>
          </LinkItem>
        </LinksLogo>
        <a onClick={openCart}>
          <LinkCart href="#">{items.length} produtos(s) no carrinho</LinkCart>
        </a>
      </Fundo>
    </HeaderBar>
  )
}
export default HeaderCarrinho
