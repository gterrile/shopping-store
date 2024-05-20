//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Product from './components/Product.jsx'
import Cart from './components/Cart.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'categorie/:name', element: <Product /> },
      { path: 'cart', element: <Cart /> },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

      <RouterProvider router={router}></RouterProvider>

)
