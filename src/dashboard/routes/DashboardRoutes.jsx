import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage"


export const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <DashboardPage /> } />
        <Route path="/users" element={<></> } />
        

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}