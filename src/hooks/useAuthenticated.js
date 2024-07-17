import { useContext } from 'react'
import { AuthenticatedContext } from '../context/AuthenticatedContext'

export const useAuthenticated = () => {
  const contextAuthenticated = useContext(AuthenticatedContext)

  if (AuthenticatedContext === undefined) {
    throw new Error('Use Authenticated no puede usarse sin un CartProvider')
  }

  return contextAuthenticated
}
