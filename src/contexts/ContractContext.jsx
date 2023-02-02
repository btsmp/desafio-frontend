import { createContext, useState } from 'react'

export const ContractContext = createContext({})

export function ContractProvider({ children }) {
  const [contractId, setContractId] = useState([])
  console.log(contractId)
  return (
    <ContractContext.Provider value={{ contractId, setContractId }}>
      {children}
    </ContractContext.Provider>
  )
}
