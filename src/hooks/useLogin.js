import { useState, useEffect } from 'react'
import { useAuthenticated } from '../hooks/useAuthenticated'
import { useNavigate } from 'react-router-dom'
import { useCart } from './useCart'

export const useLogin = () => {
  const {
    isAuthenticated,
    isLoginVisible,
    buttonId,
    actualProduct,
    handleLogin,
    handleLogout,
    handleOpenModal,
    handleCloseModal,
    handleActualProduct
  } = useAuthenticated()
  // const [isLoginVisible, setIsLoginVisible] = useState(false)

  const { addToCart } = useCart()

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
      handleLogin()
      if (buttonId === 'cart') {
        navigate('/shop_cart')
      }
      if (buttonId === 'products') {
        addToCart(actualProduct)
      }
      if (buttonId === 'product') {
        addToCart(actualProduct)
      }
    }
    handleCloseModal()
  }

  return {
    isAuthenticated,
    isLoginVisible,
    formData,
    buttonId,
    handleLogout,
    isMenuUserVisible,
    handleOpenModal,
    handleCloseModal,
    handleSubmitLogin,
    handleMenuUser,
    handleMenuUserClick,
    handleActualProduct
  }
}
