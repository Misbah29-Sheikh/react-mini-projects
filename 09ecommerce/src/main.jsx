import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Products from './components/Product/Products.jsx';
import Cart from './components/Cart/Cart.jsx';
import CartProvider from './context/CartContext.jsx';
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Products />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
  
)
