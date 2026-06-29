import React from 'react'
import { useCart } from '../../context/CartContext'

function Cart() {
  const { cart, totalItems, totalPrice, dispatch } = useCart();

  const handleCheckout = () => {
    alert("Order placed successfully!");
    dispatch({ type: "CLEAR_CART" });
  }

  if (cart.length === 0) {
    return <h1>Your cart is empty.</h1>;
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-slate-800">
        Your Cart
      </h1>

      <div className="max-w-5xl mx-auto space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-5 flex items-center gap-6"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-xl"
            />

            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-slate-800">
                {item.name}
              </h2>

              <p className="text-cyan-600 font-bold text-lg mt-2">
                ₹{item.price}
              </p>

              <div className="flex items-center gap-4 mt-4">
                <button className="bg-slate-900 text-white px-3 py-1 rounded"
                  onClick={() => dispatch({
                    type: "DEC_QUANTITY",
                    payload: item.id
                  })}>
                  -
                </button>

                <span className="font-semibold">
                  {item.quantity}
                </span>

                <button className="bg-cyan-600 text-white px-3 py-1 rounded"
                  onClick={() => dispatch({
                    type: "INC_QUANTITY",
                    payload: item.id
                  })}>
                  +
                </button>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xl font-bold text-slate-700 mb-4">
                ₹{item.price * item.quantity}
              </p>

              <button className="text-red-500"
                onClick={() => dispatch({
                  type: "REMOVE_ITEM",
                  payload: item.id
                })}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                  <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}

        <div className="bg-slate-900 text-white rounded-2xl p-6 flex justify-between text-xl font-semibold">
          <span>Items: {totalItems}</span>
          <span>Total: ₹{totalPrice}</span>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            className="px-6 py-3 rounded-xl border border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition"
            onClick={()=>dispatch({
              type:"CLEAR_CART",
            })}
          >
            Clear Cart
          </button>

          <button
            className="px-6 py-3 rounded-xl bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart