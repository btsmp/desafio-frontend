import { ContractsTable } from '../../components/ContractsTable'
import { ContractContext } from '../../contexts/ContractContext'
import { UserContext } from '../../contexts/UserContext'
import { NavButtons } from '../../components/NavButtons'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import { Title } from '../../components/Title'
import { Shape } from '../../components/Shape'
import { useContext } from 'react'

export function Home() {
  const { signOut } = useContext(UserContext)
  const { contractId, setContractId } = useContext(ContractContext)
  const navigate = useNavigate()

  function handleSignOut() {
    const confirmation = confirm('Deseja mesmo sair?')
    if (confirmation) {
      signOut()
      navigate('/')
    }
  }
  function handleNextClick() {
    if (contractId.length === 0) {
      return alert('Ao menos um Contrato deverá ser selecionado')
    }

    if (contractId.length > 1) {
      return alert('Somente um Contrato deverá ser selecionado')
    }
    navigate(`/contracts/${contractId[0]}`)
    setContractId([])
  }

  return (
    <Shape>
      <Header />
      <Title>Contratos Vinculados</Title>
      <ContractsTable />
      <NavButtons previousFunc={handleSignOut} nextFunc={handleNextClick} />
      <Footer />
    </Shape>
  )
}
