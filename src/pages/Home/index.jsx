import { Container, Apresentation, Header } from './styles'
import { ImgWrapper } from '../../components/ImgWrapper'
import { UserContext } from '../../contexts/UserContext'
import { useContext } from 'react'

export function Home() {
  const { userData } = useContext(UserContext)
  console.log(userData)
  return (
    <Container>
      <Apresentation>
        <ImgWrapper />
        <h1 className="font-semibold text-4xl px-20">
          PAGAMENTO DO FORNECEDOR
        </h1>
      </Apresentation>
      <Header>
        <p>
          Razão social:{' '}
          <span className="font-normal">{userData.socialReason}</span>
        </p>
        <p>
          CNPJ: <span className="font-normal">{userData.cnpj}</span>
        </p>
        <p className="basis-full">
          Nome Fantasia:{' '}
          <span className="font-normal">{userData.fantasyName}</span>
        </p>
      </Header>
      <h1 className="p-2 border border-red-700 rounded-md font-semibold text-center">
        Contratos Vinculados
      </h1>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nome do Contrato</th>
            <th>Codigo do Contrato</th>
            <th>Retenção Técnica</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-red-400">
              <input type="checkbox" />
            </td>
            <td>Emil</td>
            <td>Tobias</td>
            <td>Linus</td>
            <td>Algumacoisa</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
