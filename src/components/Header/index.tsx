import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart, Logo } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <Logo src={logo} alt="nike" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <a onClick={openCart}>
        <LinkCart href="#">
          0 - produtos(s)
          <img src={carrinho} alt="carrinho" />
        </LinkCart>
      </a>
    </HeaderBar>
  )
}
export default Header
