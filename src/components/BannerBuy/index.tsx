import { Imagem, Titulo, Precos, Alinhar } from './styles'

export type Props = {
  titulo: string
  tipo: string
  capa: string
}

const BannerBuy = ({ titulo, tipo, capa }: Props) => (
  <Imagem style={{ backgroundImage: `url(${capa})` }}>
    <Alinhar>
      <Precos>{tipo}</Precos>
      <Titulo>{titulo}</Titulo>
    </Alinhar>
  </Imagem>
)

export default BannerBuy
