import { useState, useEffect } from 'react'
import { useAuthenticated } from '../hooks/useAuthenticated'

export const useLogin = () => {
  const { isAuthenticated, handleLogin, handleLogout } = useAuthenticated()
  const [isLoginVisible, setIsLoginVisible] = useState(false)
  const formData = {
    user: 'Test User',
    password: 'PassUser.007'
  }
  const [isMenuUserVisible, setIsMenuUserVisible] = useState(false)

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

  const handleOpenModal = () => {
    setIsLoginVisible(true)
  }
  const handleCloseModal = () => {
    setIsLoginVisible(false)
  }
  //   const handleModalClick = (e) => {
  //     e.stopPropagation()
  //   }
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    if ((formData.user === 'Test User') && (formData.password === 'PassUser.007')) {
      /* global sessionStorage */
      sessionStorage.setItem('user', JSON.stringify(formData.user))
      handleLogin()
    }
    handleCloseModal()
  }

  return {
    isAuthenticated,
    isLoginVisible,
    formData,
    handleLogout,
    isMenuUserVisible,
    handleOpenModal,
    handleCloseModal,
    handleSubmitLogin,
    handleMenuUser,
    handleMenuUserClick
  }
}
