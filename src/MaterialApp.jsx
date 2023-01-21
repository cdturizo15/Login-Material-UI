import React from 'react'
import { AuthProvider } from './auth/context/AuthProvider'
import { AppRouter } from './router/AppRouter'

export const MaterialApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
