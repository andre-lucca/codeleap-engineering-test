import { Routes, Route } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}