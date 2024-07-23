import { useEffect, useState } from 'react'
import { ShoppingCartXIcon } from '../components/icons/ShoppingCartXIcon'
import { useCart } from '../hooks/useCart'

export const CartItem = ({ name, price, quantity, image, stock, product }) => {
  const { removeFromCart, addToCart, removeItem } = useCart()
  const [isBtnDisabled, setIsBtnDisabled] = useState()

  useEffect(() => {
    if (quantity <= 1) setIsBtnDisabled(true)
    else { setIsBtnDisabled(() => { return false }) }
  }, [quantity])

  return (
    <article className='flex flex-wrap justify-between'>
      <div className='block w-full min-[515px]:flex min-[515px]:w-fit flex-wrap gap-0 min-[515px]:gap-10'>
        <img className='h-40 w-40 2xl:h-52 2xl:w-52 mx-auto' src={image} alt={`Image of ${name}`} />
        <div className='flex flex-col py-0 min-[515px]:py-4'>
          <h3 className='font-bold 2xl:text-4xl'>{name}</h3>
          <span className='font-semibold 2xl:text-xl'>Price:</span>
          <span className='2xl:text-2xl'>{`$${price}`}</span>
          <span className='font-semibold 2xl:text-xl'>Stock:</span>
          <span className='2xl:text-2xl'>{stock}</span>
        </div>
      </div>
      <div className='flex gap-2 pb-2 min-[515px]:py-4 w-full min-[515px]:w-fit justify-center'>
        <button
          className='bg-primary h-8 px-3 py-1 rounded-md font-medium flex justify-center items-center gap-1 2xl:gap-3 2xl:text-2xl'
          onClick={() => { removeFromCart(product) }}
        >
          <ShoppingCartXIcon />Remove
        </button>
        <button
          onClick={() => {
            removeItem(product)
          }}
          className=' w-8 h-8 bg-primary rounded-md 2xl:text-2xl'
          disabled={isBtnDisabled}
        >-
        </button>
        <span className='2xl:text-2xl'>{quantity}</span>
        <button
          onClick={() => {
            addToCart(product)
          }} className='w-8 h-8 bg-primary rounded-md 2xl:text-2xl'
        >+
        </button>
      </div>
    </article>
  )
}
