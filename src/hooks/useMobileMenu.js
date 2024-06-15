import { useState } from 'react'

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return { isOpen, toggleMenu }
}
