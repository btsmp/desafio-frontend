import { Header } from '../../components/Header'
import { Shape } from '../../components/Shape'
import { Title } from '../../components/Title'
import { useParams } from 'react-router-dom'

export function Contract() {
  const { id } = useParams()
  console.log(id)
  return (
    <Shape>
      <Header />
      <Title>Dados da Nota Fiscal</Title>
    </Shape>
  )
}
