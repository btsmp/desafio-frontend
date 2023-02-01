import { Container } from './styles'
import logo from '../../assets/logo.png'

export function ImgWrapper() {
  return (
    <Container>
      <img src={logo} alt="Logo VFlows" />
    </Container>
  )
}
