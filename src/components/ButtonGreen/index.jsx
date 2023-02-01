import { Button } from './styles'

export function ButtonGreen({ children, ...rest }) {
  return (
    <Button type="submit" {...rest}>
      {children}
    </Button>
  )
}
