import { Link } from 'react-router-dom'
import {
  Container,
  CopyRight,
  FooterSection,
  Logo,
  RedesSociais,
  SectionTitle
} from './styles'

import ImagemLogo from '../../assets/images/efood.png'
import ImagemRedesSocias from '../../assets/images/redessociais.png'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <FooterSection>
      <Link to="/">
        <Logo src={ImagemLogo} />
      </Link>
      <RedesSociais src={ImagemRedesSocias} />
      <CopyRight>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </CopyRight>
    </FooterSection>
  </Container>
)

export default Footer
