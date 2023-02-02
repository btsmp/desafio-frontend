import { ButtonsContainer } from './styles'
export function NavButtons({ previousFunc, nextFunc }) {
  return (
    <ButtonsContainer>
      <button onClick={previousFunc}>Anterior</button>
      <button onClick={nextFunc}>Próximo</button>
    </ButtonsContainer>
  )
}
