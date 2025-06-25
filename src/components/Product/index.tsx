import EstrelaImg from '../../assets/images/estrela.png'
import { TagBig } from '../Tag'
import {
  Card,
  Descricao,
  Titulo,
  Imagem,
  Container,
  Border,
  Nota,
  Star,
  Grid
} from './styles'
import { TagContainerSmall } from '../Tag/styles'
import { Link } from 'react-router-dom'

export type Props = {
  id: string | number
  title: string
  category: string
  type?: number
  description: string
  image: string
}

const Product = ({ id, title, category, type, description, image }: Props) => (
  <Card>
    <Container>
      <Imagem src={image} alt={title} />
      <TagContainerSmall>{category}</TagContainerSmall>
    </Container>
    <Border>
      <Titulo>
        {title} <Nota>{type}</Nota> <Star src={EstrelaImg} />
      </Titulo>
      <Descricao>{description}</Descricao>
      <Grid>
        <Link to={`categories/${id}`}>
          <TagBig>Saiba mais</TagBig>
        </Link>
      </Grid>
    </Border>
  </Card>
)

export default Product
