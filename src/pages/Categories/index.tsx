import { useParams } from 'react-router-dom'
import HeaderCarrinho from '../../components/HeaderCarrinho'
import ProductsListBuy from '../../components/ProductsListBuy'
import BannerBuy from '../../components/BannerBuy'
import { useEffect, useState } from 'react'

export interface ItemCardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurante {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemCardapio[]
}

const Categories = () => {
  const [promocoes, setPromocoes] = useState<Restaurante[]>([])
  const { id } = useParams()
  const [titulo, setTitulo] = useState<string>('')
  const [tipo, setTipo] = useState<string>('')
  const [capa, setCapa] = useState<string>('')

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/restaurantes.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro ao carregar restaurantes.json: ${res.status}`)
        }
        return res.json()
      })
      .then((res) => {
        setPromocoes(res)
        const restaurante = res.find(
          (rest: Restaurante) => rest.id.toString() === id
        )
        if (restaurante) {
          setTitulo(restaurante.titulo)
          setTipo(restaurante.tipo)
          setCapa(restaurante.capa)
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar dados de restaurantes:', error)
      })
  }, [id])

  return (
    <>
      <HeaderCarrinho />
      <BannerBuy titulo={titulo} tipo={tipo} capa={capa} />
      {id && <ProductsListBuy pageId={parseInt(id)} background="cor1" />}
    </>
  )
}

export default Categories
