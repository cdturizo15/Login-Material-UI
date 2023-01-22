import * as React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../../hooks/useForm'
import {Form} from '../components/Form'




export const LoginPage = () => {

  const { state, handleInputChange } = useForm({user: '', pass: ''})
  const { login } = useContext(AuthContext)
  
  return (
    <>
      <div className='row-bg'>
        <div className='form-row-login '>
          <Form state={state} login={login} handleInputChange={handleInputChange} ></Form>
          
        </div>
        <div className='bg-image-login '>
        </div>
      </div>
    </>
  )
}
