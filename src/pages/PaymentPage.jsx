import { Link } from 'react-router-dom'
import { BagIcon } from '../components/icons/BagIcon'
import { CheckIcon } from '../components/icons/CheckIcon'
import { HomeIcon } from '../components/icons/HomeIcon'
import imagePay from '../assets/img/ImagePay.webp'
import { useState } from 'react'
import { Loader } from '../components/icons/Loader'

export const PaymentPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  return (
    isLoading
      ? <Loader />
      : (
        <section className='detailProduct flex justify-center items-center min-h-screen-dvh-mobile md:min-h-screen-dvh py-4 lg:py-0'>
          <article className='detailProduct-card w-10/12 lg:w-9/12 flex flex-col justify-between gap-8 px-4 md:px-14 2xl:px-28 lg:px-[6%]
      rounded-md min-h-[80vh] relative py-4 animate-fade'
          >
            <div>
              <h3 className='text-3xl md:4xl 2xl:text-5xl font-bold'>Thank you for your purchase</h3>
              <span className='text-2xl md:text-3xl 2xl:text-4xl font-bold text-primary flex items-center gap-0 md:gap-2'> Your order has been successfully processed <CheckIcon /></span>
              <span className='text-base sm:text-lg lg:text-xl 2xl:text-xl fornt-bold'>Order Id: {getRandomArbitrary(100000000000, 999999999999)}</span>
            </div>
            <div className='flex justify-center'>
              <img className='h-60 2xl:h-[450px]' src={imagePay} alt='pay-image' />
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-base sm:text-lg lg:text-xl 2xl:text-xl fornt-bold'>
                Continue exploring our store to discover more amazing products.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link to='/products'>
                  <button className='w-full sm:w-fit bg-primary px-3 py-3 rounded-md font-bold flex justify-center items-center gap-1
              text-base sm:text-lg lg:text-xl 2xl:text-xl'
                  >
                    <BagIcon />
                    Continue Shopping
                  </button>
                </Link>
                <Link to='/'>
                  <button className='w-full sm:w-fit bg-secondaryLight px-3 py-3 rounded-md font-bold flex justify-center items-center gap-1
              text-base sm:text-lg lg:text-xl 2xl:text-xl text-primaryLight'
                  >
                    <HomeIcon />
                    Home
                  </button>
                </Link>
              </div>
            </div>
          </article>
        </section>
        )
  )
}
