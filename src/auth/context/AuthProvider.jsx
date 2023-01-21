import React from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import { useReducer } from 'react'
import { types } from '../types/types'

const init = ()=>{
  const user = JSON.parse(localStorage.getItem('user'))
  return { logged: !!user, name:user?.name} 
}

export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(AuthReducer, {}, init)

    const login = (name = '')=>{
        const user = {name: name}
        const action = {
          type: types.login,
          payload: user
        }
        localStorage.setItem('user', JSON.stringify(user) )
        dispatch(action)
    }
    const logout = ()=>{
      const action = {
        type: types.logout,
      }
      dispatch(action)
      localStorage.removeItem('user')
    }
  return (
    <AuthContext.Provider value={{authState, login: login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}
