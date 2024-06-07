import { useContext } from 'react'
import { cartContext } from '../context/cartContext'

export const useCart = () => {
  const contextCart = useContext(cartContext)

  if (contextCart === undefined) {
    throw new Error('Use cart no puede usarse sin un CartProvider')
  }

  return contextCart
}
