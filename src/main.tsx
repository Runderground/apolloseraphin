import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Catalogo from './pages/Catalogo.tsx'
import './index.css'
import Product from './pages/Product.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/catalogo",
        element: <Catalogo/>
      },
      {
        path: "/produto/:id",
        element: <Product/>
      }
    ]
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
