import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Pages/Statistics';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import MainLayout from './Layout/MainLayout';
import { element } from 'prop-types';
import AllProducts from './Components/AllProducts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            element: <AllProducts></AllProducts>,
            loader: () => fetch('../allproducts.json')
          },
          {
            path: '/category/:category',
            element: <AllProducts></AllProducts>,
            loader: () => fetch('../allproducts.json')
          },


        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
