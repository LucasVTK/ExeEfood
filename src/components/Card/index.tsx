type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
)

export default Card
