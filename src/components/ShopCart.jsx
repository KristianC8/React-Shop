import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from '../components/icons/ShoppingCartIcon'
import { useCart } from '../hooks/useCart'
import { useAuthenticated } from '../hooks/useAuthenticated'

export const ShopCart = () => {
  const { isAuthenticated, handleOpenModal } = useAuthenticated()
  const { cart } = useCart()
  const [totalItems, setTotalItems] = useState(0)

  const totalItemsInCart = () => {
    let items = 0
    for (const product of cart) {
      items += product.quantity
    }
    setTotalItems(items)
  }

  useEffect(() => {
    totalItemsInCart()
  }, [cart])

  return (
    isAuthenticated
      ? (
        <Link to='/shop_cart'>
          <button className='p-2 hover:text-primary transition-colors relative'>
            <ShoppingCartIcon />
            <div className={`${totalItems === 0 ? 'hidden' : 'flex'} animate-fade absolute top-[-2px] right-0 text-[10px] rounded-full bg-primary font-bold min-w-4 h-4
            items-center justify-center`}
            >
              <span className='text-primaryLight'>{totalItems}</span>
            </div>
          </button>
        </Link>
        )
      : (
        <button className='p-2 hover:text-primary transition-colors' onClick={() => handleOpenModal('cart')}>
          <ShoppingCartIcon />
        </button>
        )
  )
}
