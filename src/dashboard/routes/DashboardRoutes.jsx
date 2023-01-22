import { Navigate, Route, Routes } from "react-router-dom"
import { Create } from "../pages/Create"
import { DashboardPage } from "../pages/DashboardPage"
import { Edit } from "../pages/Edit"


export const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <DashboardPage /> } />
        <Route path="/create" element={<Create/> } />
        <Route path="/edit/:id" element={<Edit/> } />
        

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}