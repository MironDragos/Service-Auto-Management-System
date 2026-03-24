import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './pages/Dashboard.jsx'
import CarDetails from './pages/CarDetails.jsx'
import Cars from './pages/Cars.jsx'
import AddCar from './pages/AddCar.jsx'
import Settings from './pages/Settings.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: "/", element: <Dashboard/>},
  {path: "/CarDetails", element: <CarDetails/>},
  {path: "/Cars", element: <Cars/>},
  {path: "/AddCar", element: <AddCar/>},
  {path: "/Settings", element: <Settings/>},
  {path: "*", element: <NotFoundPage/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
