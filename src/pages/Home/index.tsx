import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

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

const Home = () => {
  const [lancamentos, setLancamentos] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/restaurantes.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro ao carregar restaurantes.json: ${res.status}`)
        }
        return res.json()
      })
      .then((res) => {
        setLancamentos(res)
      })
      .catch((error) => {
        console.error('Erro ao buscar dados de restaurantes:', error)
      })
  }, [])

  return (
    <>
      <Banner />
      <ProductsList clothes={lancamentos} title="" background="cor3" />
    </>
  )
}

export default Home
