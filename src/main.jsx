import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import GlobalStyles from './styles/global'

import { UserProvider } from './contexts/UserContext'
import { Routes } from './routes'
import { ContractProvider } from './contexts/ContractContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <ContractProvider>
      <GlobalStyles />
      <Routes />
    </ContractProvider>
  </UserProvider>,
)
