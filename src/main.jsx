import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import GlobalStyles from './styles/global'

import { UserProvider } from './contexts/UserContext'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyles />
      <Routes />
    </UserProvider>
  </React.StrictMode>,
)
