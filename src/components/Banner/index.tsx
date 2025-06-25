import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, Logo, Fundo, Chamariz } from './styles'

import efood from '../../assets/images/efood.png'
import fundo from '../../assets/images/fundo.png'

const Banner = () => (
  <HeaderBar>
    <Fundo style={{ backgroundImage: `url(${fundo})` }}>
      <Links>
        <LinkItem>
          <Link to="/">
            <Logo src={efood} />
          </Link>
        </LinkItem>
      </Links>
      <Chamariz>
        Viva experiências gastronômicas no conforto da sua casa
      </Chamariz>
    </Fundo>
  </HeaderBar>
)

export default Banner
