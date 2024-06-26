import { createContext, useState } from 'react'

export const cartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // Validar si el producto ya esta en el carrito
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    // Si el producto existe saco una copia y agrego +1 a la cantidad
    if (productInCartIndex >= 0) return
    // const newCart = structuredClone(cart)
    // newCart[productInCartIndex].quantity += 1
    // return setCart(newCart)

    // Si el producto no existe
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => product.id !== item.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <cartContext.Provider value={{
      cart,
      setCart,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </cartContext.Provider>
  )
}
