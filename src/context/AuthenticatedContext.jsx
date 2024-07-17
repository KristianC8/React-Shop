import { createContext, useState } from 'react'

export const AuthenticatedContext = createContext()

export const AuthenticatedProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

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
      handleLogin,
      handleLogout
    }}
    >
      {children}
    </AuthenticatedContext.Provider>
  )
}
