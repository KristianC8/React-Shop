import { useState, useEffect } from 'react'
import { useAuthenticated } from '../hooks/useAuthenticated'
import { useNavigate } from 'react-router-dom'
import { useCart } from './useCart'

export const useLogin = () => {
  const {
    buttonId,
    actualProduct,
    handleLogin,
    handleCloseModal
  } = useAuthenticated()
  // const [isLoginVisible, setIsLoginVisible] = useState(false)

  const { cart, setCart, addToCart } = useCart()

  const formData = {
    user: 'Test User',
    password: 'PassUser.007'
  }
  const [isMenuUserVisible, setIsMenuUserVisible] = useState(false)
  const navigate = useNavigate()

  const handleMenuUser = () => {
    setIsMenuUserVisible(!isMenuUserVisible)
  }

  const handleMenuUserClick = (e) => {
    e.stopPropagation()
  }

  useEffect(() => {
    // if (!('user' in sessionStorage)) {
    //   handleLogout()
    // } else {
    //   handleLogin()
    // }
    const user = sessionStorage.getItem('user')
    if (user) {
      handleLogin()
    }
  }, [])

  // const handleOpenModal = () => {
  //   setIsLoginVisible(true)
  // }
  // const handleCloseModal = () => {
  //   setIsLoginVisible(false)
  // }
  //   const handleModalClick = (e) => {
  //     e.stopPropagation()
  //   }
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    if ((formData.user === 'Test User') && (formData.password === 'PassUser.007')) {
      /* global sessionStorage */
      sessionStorage.setItem('user', JSON.stringify(formData.user))
      if (sessionStorage.getItem('cart')) setCart(JSON.parse(sessionStorage.getItem('cart')))
      handleLogin()
      if (buttonId === 'cart') {
        navigate('/shop_cart')
      }
      if (buttonId === 'products' || buttonId === 'product') {
        const sessionCart = JSON.parse(sessionStorage.getItem('cart'))
        if (sessionCart) {
          const productInCartIndex = sessionCart.findIndex(item => item.id === actualProduct.id)
          if (productInCartIndex === -1) {
            addToCart(actualProduct)
            const newCart = [...cart, {
              ...actualProduct,
              quantity: 1,
              stock: actualProduct.stock - 1
            }]
            sessionStorage.setItem('cart', JSON.stringify(newCart))
          }
        } else {
          addToCart(actualProduct)
          const newCart = [...cart, {
            ...actualProduct,
            quantity: 1,
            stock: actualProduct.stock - 1
          }]
          sessionStorage.setItem('cart', JSON.stringify(newCart))
        }
      }
      // if (buttonId === 'product') {
      //   const productInCartIndex = JSON.parse(sessionStorage.getItem('cart')).findIndex(item => item.id === actualProduct.id)
      //   if (productInCartIndex === -1) {
      //     addToCart(actualProduct)
      //     const newCart = [...cart, {
      //       ...actualProduct,
      //       quantity: 1,
      //       stock: actualProduct.stock - 1
      //     }]
      //     sessionStorage.setItem('cart', JSON.stringify(newCart))
      //   }
      // }
    }
    handleCloseModal()
  }

  return {
    formData,
    buttonId,
    isMenuUserVisible,
    handleSubmitLogin,
    handleMenuUser,
    handleMenuUserClick
  }
}
