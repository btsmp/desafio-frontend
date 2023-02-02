import { ImgWrapper } from '../ImgWrapper'
import { Container } from './styles'
export function Footer() {
  return (
    <Container>
      <p className="w-full text-center text-gray-400 text-sm">
        © 2022-2022 Construindo Patrimônios
      </p>
      <div className="absolute bottom-4 left-7">
        <ImgWrapper />
      </div>
    </Container>
  )
}
