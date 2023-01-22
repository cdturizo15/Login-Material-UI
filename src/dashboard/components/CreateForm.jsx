import React from 'react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const createURL = 'https://run.mocky.io/v3/aad2a9ed-f525-41a5-b417-be0df6560bfd'

export const CreateForm = ({ handleInputChange, state, authState, action}) => {

    const navigate = useNavigate()
    const errorEmpty = useRef()

    const handleRegister = async ()=>{
        
        const credentials = {...state}
        const {name, user, pass} = credentials

        if( user.length < 1 || pass.length < 1 || name.length<1){
            errorEmpty.current.style.display = 'block'
            return
          }
          errorEmpty.current.style.display = 'none'
        const res = await fetch(createURL, {
            method: 'POST',
            body: JSON.stringify(credentials)
          })
          if (res.status !== 401) {
            
            navigate('/', { replace: true })
            alert('Usuario creado con exito')
            return
          }
          alert('Ocurrio un error :(')
    }
    return (
        <div className='container register-container'>
            <h3>{action} usuario</h3>
            <div className='form-group  mb-3'>
                <label className='form-label' >Nombre</label>
                <input  name='name' onChange={handleInputChange} className='input-style form-control' type="text" />
            </div>

            <div className='form-group  mb-3'>
                <label className='form-label' >Usuario</label>
                <input  name='user' onChange={handleInputChange} className='input-style form-control' type="text" />
            </div>

            <div className='form-group mb-3'>
                <label className='form-label' >Contraseña</label>
                <input name='pass' onChange={handleInputChange} className='input-style form-control' type="text" />
            </div>
            <span ref={errorEmpty} className='text-danger error-message mb-3'>Campos no deben estar vacios</span>
            <button onClick={() => handleRegister()} className='btn btn-primary'>Registrar</button>
            <Link className='btn btn-secondary ms-3' to={'/'}>Volver</Link>
        </div>

    )
}
