import { CartItem } from '../components/CartItem'
import { useCart } from '../hooks/useCart'
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon'
import { Link, useNavigate } from 'react-router-dom'

export const CartPage = () => {
  const { cart, clearCart } = useCart()

  const sumTotal = () => {
    let total = 0
    for (const product of cart) {
      total += product.quantity * product.price
    }
    return total
  }

  const navigate = useNavigate()

  const handleNavigateBack = () => {
    navigate(-1)
  }

  return (
    <section className={`${cart.length === 0 ? 'my-0' : cart.length > 2 ? 'my-2' : 'my-0'} detailProduct flex justify-center items-center min-h-screen-dvh py-4  lg:py-0`}>
      <article className='detailProduct-card w-10/12 lg:w-9/12 flex flex-col gap-x-8 px-4 md:px-14 2xl:px-28 lg:px-[6%]
      rounded-md min-h-[80vh] border border-primaryDark dark:border-zinc-900 relative py-4'
      >
        <h3 className='text-2xl font-bold'>Shopping Cart</h3>
        <section className='py-4'>
          <ul>
            {cart && cart.map((product) => (
              <CartItem key={product.id} {...product} product={product} />
            ))}
          </ul>
        </section>
        <div className={`${cart.length === 0 ? 'hidden' : 'flex'}`}>
          <span className='font-bold'>Total: </span>
          <span>{`$${Math.round(sumTotal() * 100) / 100}`}</span>
        </div>
        <div className={`${cart.length === 0 ? 'hidden' : 'flex'} text-xl justify-between`}>
          <Link to='/payment'>
            <button
              onClick={() => { clearCart() }} className={`${cart.length === 0 ? 'hidden' : 'block'} bg-primary text-xl font-bold px-4 py-2 w-fit 
        rounded-md mt-4`}
            >ChekOut
            </button>
          </Link>
          <button className='w-fit hover:text-primary hover:underline transition-colors font-bold' onClick={clearCart}>Empty Cart</button>
        </div>
        <button
          className=' absolute top-2 right-2 bg-secondaryLight text-primaryLight px-0 py-2 sm:px-2 sm:py-1 rounded'
          onClick={handleNavigateBack}
        >
          <span className='hidden sm:block'>
            Back
          </span>
          <span className='sm:hidden'>
            <ArrowLeftIcon />
          </span>
        </button>
        <article className={`${cart.length === 0 ? 'flex' : 'hidden'} flex-col items-center text-lg gap-2 2xl:gap-6`}>
          <h3 className='text-2xl font-extrabold'>Your Shopping Cart is <span className='text-primary text-3xl'>EMPTY</span></h3>
          <div className='bg-[rgba(8,145,178,0.2)] rounded-full drop-shadow-[0_0_8px_rgba(8,145,178,1)] p-4'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-60 2xl:h-96' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' /><path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' /><path d='M17 17h-11v-14h-2' /><path d='M6 5l14 1l-1 7h-13' /></svg>
          </div>
          <p className='font-bold w-[80%] text-center'>Looks like you have not added anything to your cart.
            <span className='text-primary'> Explore our offers!</span>, we have hundreds of products from the best brands.
          </p>
          <Link to='/products'>
            <button className='bg-primary w-fit flex justify-center items-center gap-1
                     px-3 py-1 rounded-md text-xl font-bold'
            >Start Shopping
            </button>
          </Link>
        </article>
      </article>
    </section>
  )
}
