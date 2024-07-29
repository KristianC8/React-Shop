import { createContext, useReducer } from 'react'
import { cartInit, cartInitialState, cartReducer } from '../reducers/cartReducer'
import { TYPES } from '../actions/cartActions'

export const cartContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState, cartInit)

  const addToCart = product => dispatch({
    type: TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const removeItem = product => dispatch({
    type: TYPES.REMOVE_ITEM,
    payload: product
  })

  const clearCart = () => dispatch({
    type: TYPES.CLEAR_CART
  })

  const setCart = cart => dispatch({
    type: TYPES.SET_CART,
    payload: cart
  })

  return (
    <cartContext.Provider value={{
      cart: state,
      addToCart,
      setCart,
      clearCart,
      removeItem,
      removeFromCart
    }}
    >
      {children}
    </cartContext.Provider>
  )
}
