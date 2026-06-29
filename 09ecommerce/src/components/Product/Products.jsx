import React from 'react'
import { useCart } from '../../context/CartContext';

function Products() {
  const products = [
    {
      id: 1,
      name: "Travel Bag",
      price: 1999,
      image:
        "https://images.pexels.com/photos/23223851/pexels-photo-23223851.jpeg"
    },
    {
      id: 2,
      name: "Headphones",
      price: 2499,
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 3999,
      image:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
    }
  ];

  const {dispatch} = useCart();

  return (

    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-10">
        Our Products
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold text-slate-800 mb-2">
                {product.name}
              </h2>

              <p className="text-cyan-600 text-lg font-bold mb-4">
                ₹{product.price}
              </p>

              <button className="w-full bg-slate-900 text-white py-3 rounded-xl hover:bg-cyan-600 transition"
              onClick={() => dispatch({
                type : "ADD_TO_CART",
                payload : product
              })}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products