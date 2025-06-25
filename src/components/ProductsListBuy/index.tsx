import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurante } from '../../pages/Home'
import ProductBuy from '../ProductBuy'
import { Container, List } from './styles'

export interface ItemCardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Props {
  background: 'cor3' | 'cor1'
  pageId: number
}

const ProductsListBuy = ({ background }: Props) => {
  const [restaurants, setRestaurants] = useState<Restaurante[]>([])
  const { id } = useParams()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  const filteredRestaurant = restaurants.find(
    (restaurant) => restaurant.id.toString() === id
  )

  return (
    <Container background={background}>
      <div className="container">
        <List>
          {filteredRestaurant &&
            filteredRestaurant.cardapio.map((item) => (
              <li key={item.id}>
                <ProductBuy
                  cardapioItem={item}
                  porcao={item.porcao}
                  preco={item.preco}
                  category={filteredRestaurant.tipo}
                  description={item.descricao}
                  image={item.foto}
                  type={filteredRestaurant.avaliacao}
                  title={item.nome}
                  id={item.id}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsListBuy
