import * as React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../../hooks/useForm'


export const LoginPage = () => {

  const { state, handleInputChange } = useForm()
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const deniedAccessURL = 'https://run.mocky.io/v3/a63d6ed1-9efe-4286-a867-28ff3de2f339'
  const AccessURL = 'https://run.mocky.io/v3/dababbc3-e0fb-4489-97b5-408e928bc926'
  const onLogin = async () => {
    event.preventDefault()
    const credentials = { ...state }
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

  return (
    <>
      <div className='row-bg'>
        <div className='form-row-login '>
          <form >

            <div className='form-container'>
              <h3 className='mb-4'>Inicio de sesion</h3>
              <div className='form-group  mb-3'>
                <label className='form-label' >Usuario</label>
                <input name='user' onChange={handleInputChange} className='form-control ou' type="text" />
              </div>

              <div className='form-group mb-3'>
                <label className='form-label' >Contraseña</label>
                <input name='pass' onChange={handleInputChange} className='form-control ' type="password" />
              </div>
              <button onClick={() => onLogin()} className='btn btn-primary'>Ingresar</button>
            </div>
          </form>

        </div>

        <div className='bg-image-login '>
        </div>
      </div>
    </>
  )
}
