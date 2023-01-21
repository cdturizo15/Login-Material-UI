import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import {DashboardRoutes} from '../dashboard/routes/DashboardRoutes'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <Routes>

        <Route path="auth/*" element={
          <PublicRoute>
            <AuthRoutes />
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <DashboardRoutes /> 
          </PrivateRoute>
        } />


    </Routes>
  )
}