import React from 'react'
import { Navbar } from '../components/Navbar'
import { useContext } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'
import { useForm } from '../../hooks/useForm'
import { EditForm } from '../components/EditForm'

export const Edit = () => {
    const { authState, logout } = useContext(AuthContext)
    const { state, handleInputChange } = useForm({name: '', user: '', pass: ''})
  return (
    <>
        <Navbar authState={authState} logout={logout}/>
        <div className='bg-dashboard'>
            <EditForm action={'Editar'} handleInputChange={handleInputChange} state={state} authState={authState} />
        </div>
        
    </>
  )
}
