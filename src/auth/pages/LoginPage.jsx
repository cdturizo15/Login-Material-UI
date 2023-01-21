import * as React from 'react';
import { useContext } from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const LoginPage = () => {
  
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = () => {
    login("cris")
    navigate('/', {replace:true})
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
                <input className='form-control ou' type="text" />
              </div>

              <div className='form-group mb-3'>
                <label className='form-label' >Contraseña</label>
                <input className='form-control ' type="password" />
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
