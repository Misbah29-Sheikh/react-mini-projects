import { createContext, useContext, useEffect, useReducer } from "react";

export const CartContext = createContext({
  cart: [],
  dispatch: () => { },
  totalItems: 0,
  totalPrice: 0
})

export const useCart = () => {
  return useContext(CartContext);
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.find(
        item => item.id === action.payload.id
      );
      if(!existingItem) {
        return [...state, { ...action.payload, quantity: 1 }]
      } else {
        return state.map((item) => {
          if(item.id===action.payload.id) {
            return {...item, quantity: item.quantity + 1}
          }
          return item;
        })
      }
    }
      
    case "INC_QUANTITY" : {
      return state.map((item) => {
        if(item.id===action.payload) {
          return {...item, quantity: item.quantity + 1}
        }
        return item;
      })
    }

    case "DEC_QUANTITY" : {
      const existingItem = state.find((item) => item.id === action.payload);
      if(existingItem.quantity===1) {
        return state.filter((item) => item.id!==action.payload)
      } else {
        return state.map((item) => {
        if(item.id===action.payload) {
          return {...item, quantity: item.quantity - 1}
        }
        return item;
      })
      }
    }
    
    case "REMOVE_ITEM" : {
      return state.filter((item) => item.id!==action.payload)
    }

    case "CLEAR_CART" : {
      return [];
    }

    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, 
    JSON.parse(localStorage.getItem("cart")) || [])

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

  useEffect(() => {
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])

  return (
    <CartContext.Provider value={{ cart, dispatch, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider