import {
  Item,
  Modal,
  ModalContent,
  ItemImagem,
  Fechar,
  TituloCompra,
  DescricaoCompra,
  CenterA
} from './styles'
import close from '../../assets/images/close.png'
import { useState } from 'react'
import { Card, Descricao, Titulo, Container, Imagem, Comprar } from './styles'
import { TagBigBuy, TagComprar } from '../TagBuy'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  id: string | number
  title: string
  category: string
  type?: number
  description: string
  image: string
  preco: number
  porcao: string
  cardapioItem: CardapioItem
}

type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

// type Restaurante = {
//   id: number
//   titulo: string
//   destacado: boolean
//   tipo: string
//   avaliacao: number
//   descricao: string
//   capa: string
//   cardapio: CardapioItem[]
// }

const ProductBuy = ({
  title,
  description,
  image,
  preco,
  porcao,
  cardapioItem
}: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(cardapioItem))
    dispatch(open())
  }

  // dependia da API que está offline
  /*
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setRestaurante(data[0])
        }
      })
      .catch((error) => console.error('Erro ao buscar dados da API:', error))
  }, [])
  */

  const descricaoLimitada =
    description.length > 240
      ? `${description.substring(0, 240)}...`
      : description

  return (
    <>
      <Card>
        <Container>
          <Imagem src={image} alt={title} />
        </Container>
        <Titulo>{title}</Titulo>
        <Descricao>{descricaoLimitada}</Descricao>
        <Comprar>
          <a
            onClick={() => {
              console.log('Abrindo modal...')
              setModalEstaAberto(true)
            }}
          >
            <TagBigBuy>Mais detalhes</TagBigBuy>
          </a>
        </Comprar>
      </Card>
      {modalEstaAberto && (
        <Modal className="visivel">
          <ModalContent>
            <ItemImagem>
              <img src={image} alt={title} />
            </ItemImagem>
            <Item>
              <header>
                <Fechar
                  src={close}
                  alt="icone de fechar"
                  onClick={() => setModalEstaAberto(false)}
                />
              </header>
              <TituloCompra>{title}</TituloCompra>
              <DescricaoCompra>
                {description}
                <br />
                <br /> Serve {porcao}
              </DescricaoCompra>
              <CenterA onClick={addToCart}>
                <TagComprar>
                  Adicionar ao carrinho -{' '}
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(preco)}
                </TagComprar>
              </CenterA>
            </Item>
          </ModalContent>
          <div
            onClick={() => setModalEstaAberto(false)}
            className="overlay"
          ></div>
        </Modal>
      )}
    </>
  )
}

export default ProductBuy
