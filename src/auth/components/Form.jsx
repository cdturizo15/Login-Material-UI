import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const deniedAccessURL = 'https://run.mocky.io/v3/a63d6ed1-9efe-4286-a867-28ff3de2f339'
const AccessURL = 'https://run.mocky.io/v3/dababbc3-e0fb-4489-97b5-408e928bc926'

export const Form = ({state, login, handleInputChange}) => {

    const navigate = useNavigate()
    const errorM = useRef()
    const errorEmpty = useRef()

    const onLogin = async () => {

        event.preventDefault()
        const credentials = { ...state }
        const {user, pass} = credentials

        if( user.length < 1 || pass.length < 1){
          errorEmpty.current.style.display = 'block'
          return
        }
    
        if(user==='admin' && pass==='admin'){
          const res = await fetch(AccessURL, {
            method: 'POST',
            body: JSON.stringify(credentials)
          })
          const data = await res.json()
          if (res.status !== 401) {
            login(data.name)
            navigate('/', { replace: true })
            
          }
          alert(data.messsage)
        }
        errorEmpty.current.style.display = 'none'
        errorM.current.style.display = 'block'
    
      }

    return (
        <form >

            <div className='form-container center-animation'>
                <h3 className='mb-4'>Inicio de sesion</h3>
                <span><i className='bi bi-person icon-size-login'></i></span>
                <div className='form-group  mb-3'>
                    <label className='form-label' >Usuario</label>
                    <input name='user' onChange={handleInputChange} className='input-style form-control' type="text" />
                </div>

                <div className='form-group mb-3'>
                    <label className='form-label' >Contraseña</label>
                    <input name='pass' onChange={handleInputChange} className='input-style form-control' type="password" />
                </div>
                <span ref={errorM} className='text-danger error-message mb-3'>Credenciales incorrectas</span>
                <span ref={errorEmpty} className='text-danger error-message mb-3'>Campos no deben estar vacios</span>
                <button onClick={() => onLogin()} className='btn btn-primary'>Ingresar</button>
            </div>
        </form>
    )
}
