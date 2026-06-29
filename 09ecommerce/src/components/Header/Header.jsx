import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext';

function Header() {
  const navClass = ({ isActive }) =>
    `transition duration-200 ${isActive
      ? "text-cyan-400"
      : "text-gray-300 hover:text-cyan-400"
    }`;

  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      <nav className="bg-slate-900 text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">

          <h1 className="text-2xl font-bold text-cyan-400">
            ShopKart
          </h1>

          <ul className="flex items-center gap-8 font-medium">
            <li>
              <NavLink to="/" className={navClass}>
                Products
              </NavLink>
            </li>

            <li className="relative">
              <NavLink to="/cart" className={`${navClass} text-2xl`}>
                🛒
              </NavLink>

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header