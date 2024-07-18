import { createContext, useState } from 'react'

export const AuthenticatedContext = createContext()

export const AuthenticatedProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoginVisible, setIsLoginVisible] = useState(false)
  const [buttonId, setButtonId] = useState(null)
  const [actualProduct, setActualProduct] = useState(null)

  const handleActualProduct = (product) => {
    setActualProduct(product)
  }

  const handleOpenModal = (id) => {
    setIsLoginVisible(true)
    setButtonId(id)
  }
  const handleCloseModal = () => {
    setIsLoginVisible(false)
    setButtonId(null)
    setActualProduct(null)
  }

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    /* global sessionStorage */
    sessionStorage.removeItem('user')
  }

  return (
    <AuthenticatedContext.Provider value={{
      isAuthenticated,
      isLoginVisible,
      buttonId,
      actualProduct,
      handleLogin,
      handleLogout,
      handleOpenModal,
      handleCloseModal,
      handleActualProduct
    }}
    >
      {children}
    </AuthenticatedContext.Provider>
  )
}
