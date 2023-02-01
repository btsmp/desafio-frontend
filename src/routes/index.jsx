import { BrowserRouter } from 'react-router-dom'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export function Routes() {
  const { userData } = useContext(UserContext)
  return (
    <BrowserRouter>{userData ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  )
}
