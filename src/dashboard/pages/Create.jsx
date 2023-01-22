import React from 'react'
import { Navbar } from '../components/Navbar'
import { useContext } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'
import { CreateForm } from '../components/CreateForm'
import { useForm } from '../../hooks/useForm'

export const Create = () => {
    const { authState, logout } = useContext(AuthContext)
    const { state, handleInputChange } = useForm({name: '', user: '', pass: ''})
  return (
    <>
        <Navbar authState={authState} logout={logout}/>
        <div className='bg-dashboard'>
            <CreateForm action={'Registrar'} handleInputChange={handleInputChange} state={state} authState={authState} />
        </div>
        
    </>
  )
}
