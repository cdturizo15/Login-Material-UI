import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import { useEffect, useState } from 'react'

const usersUrl = 'https://run.mocky.io/v3/c7346fe9-9394-4fef-ae38-51c980380ae0'

export const DashboardPage = () => {

  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const { authState, logout } = useContext(AuthContext)
  const getUsers = async ()=>{
      const res = await fetch(usersUrl)
      const data = await res.json()
      setUsers(data)
  }
  const handleLogout = () => {
    logout()
    navigate('/auth/login')
  }

  useEffect(() => {
    getUsers();
  }, [])
  return (
    <>
      <nav className="navbar justify-content-between navbar-expand-lg navbar-dark navbar-color p-3">
        <h1 className="navbar-brand"  >Dashboard</h1>
        <span className='text-light'>Bienvenido, {authState.name ? authState.name : ''} <button onClick={() => handleLogout()} className="btn btn-dark ms-3"><i className="bi bi-box-arrow-right icon-size"></i></button></span>
      </nav>
      <div className='bg-dashboard'>
        <div className='container table-users p-3 bg-light'>
          <h3>Usuarios</h3>
          <table className="table bg-light">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">User</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user=> (
                  <tr key={user.name}>
                    <td>{user.name}</td>
                    <td>{user.user}</td>
                    <td>{user.pass}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}
