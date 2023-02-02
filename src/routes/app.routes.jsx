import { Route, Routes } from 'react-router-dom'
import { Contract } from '../pages/Contract'
import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contracts/:id" element={<Contract />} />
    </Routes>
  )
}
