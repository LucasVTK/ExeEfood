import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

export const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export const TagBig = ({ children, size = 'big' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)
