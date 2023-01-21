import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'

export const DashboardPage = () => {

  const navigate = useNavigate()
  
  const {authState, logout} = useContext(AuthContext)
  const handleLogout = () => {
    logout()
    navigate('/auth/login')
  }
  return (
    <div>
      Dashboard Page {authState.name ? authState.name : ''}
      <hr />
      <button onClick={() => handleLogout()} className="btn btn-outline-primary">Salir</button>
      
    </div>
  )
}
