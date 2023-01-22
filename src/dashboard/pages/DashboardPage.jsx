import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Table } from '../components/Table'

const usersUrl = 'https://run.mocky.io/v3/87f22d70-41e6-4dea-b15d-e39028850bac'

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
  const handleDelete = async(id)=>{
    const res = await fetch("https://run.mocky.io/v3/eed1e3ab-79cb-44ec-b1af-ade1477f2ce7",{
      method: "POST",
      body: id
    })
    setUsers(users.filter(user=> user.id!==id))
    
  }


  useEffect(() => {
    getUsers();
  }, [])
  return (
    <>
      <Navbar authState={authState} handleLogout={handleLogout}></Navbar>
      <div className='bg-dashboard'>
        <Table users={users} handleDelete={handleDelete} ></Table>
      </div>
    </>
  )
}
