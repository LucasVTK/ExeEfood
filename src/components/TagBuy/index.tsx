import { TagContainerBuy, TagContainerComprar } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string | string[]
}

export const Tagbuy = ({ children, size = 'small' }: Props) => (
  <TagContainerBuy size={size}>{children}</TagContainerBuy>
)

export const TagBigBuy = ({ children, size = 'big' }: Props) => (
  <TagContainerBuy size={size}>{children}</TagContainerBuy>
)

export const TagComprar = ({ children, size = 'big' }: Props) => (
  <TagContainerComprar size={size}>{children}</TagContainerComprar>
)
