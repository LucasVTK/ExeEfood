import { Restaurante } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'cor3' | 'cor1'
  clothes: Restaurante[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ background, title, clothes }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {clothes.map((clothing) => (
          <Product
            key={clothing.id}
            category={clothing.tipo}
            description={clothing.descricao}
            image={clothing.cardapio[0].foto}
            type={clothing.avaliacao}
            title={clothing.titulo}
            id={clothing.id}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
