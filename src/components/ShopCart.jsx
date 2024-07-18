import React from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { ShoppingCartIcon } from '../components/icons/ShoppingCartIcon'

export const ShopCart = () => {
  const { isAuthenticated, handleOpenModal } = useLogin()
  return (
    isAuthenticated
      ? (
        <Link to='/shop_cart'>
          <button className='p-2'>
            <ShoppingCartIcon />
          </button>
        </Link>
        )
      : (
        <button className='p-2' onClick={() => handleOpenModal('cart')}>
          <ShoppingCartIcon />
        </button>
        )
  )
}
