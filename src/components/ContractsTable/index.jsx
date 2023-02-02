import { api } from '../../lib/axios'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { MyTable, StyledCheckbox } from './styles'
import { ContractContext } from '../../contexts/ContractContext'

export function ContractsTable() {
  const [contracts, setContracts] = useState([])
  const { contractId, setContractId } = useContext(ContractContext)
  const { userData } = useContext(UserContext)

  async function getUserContracts(id) {
    const { data: userContracts } = await api.get(`/contracts?userId=${id}`)
    setContracts(userContracts)
  }

  function handleSelect(event) {
    const selectedId = event.target.parentElement.id
    const alreadySelected = contractId.includes(selectedId)

    if (alreadySelected) {
      const filteredIds = contractId.filter((id) => id !== selectedId)

      setContractId(filteredIds)
    } else {
      setContractId((prevState) => [...prevState, selectedId])
    }
  }

  useEffect(() => {
    const userId = userData.id
    getUserContracts(userId)
  }, [userData])

  return (
    <MyTable>
      <thead>
        <tr>
          <th></th>
          <th className="text-left">Nome do Contrato</th>
          <th>Codigo do Contrato</th>
          <th>Retenção Técnica</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        {contracts &&
          contracts.map((contract) => {
            return (
              <tr key={contract.id}>
                <td className="pr-4" id={contract.id}>
                  <StyledCheckbox onClick={(e) => handleSelect(e)} />
                </td>
                <td className="">{contract.name}</td>
                <td className="text-center">{contract.code}</td>
                <td className="text-center bg-[#2C70B9] text-white m-2">
                  {contract.technicalRetentionPercent}%
                </td>
                <td className="text-center">
                  <button></button>
                </td>
              </tr>
            )
          })}
      </tbody>
    </MyTable>
  )
}
