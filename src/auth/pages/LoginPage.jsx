import * as React from 'react';


export const LoginPage = () => {
  return (
      <>
        <div className='row-bg'>

          <div className='form-row-login '>
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
              <button className='btn btn-primary'>Ingresar</button>
            </div>


          </div>

          <div  className='bg-image-login '>
          </div>
          </div>
      </>
  )
}
