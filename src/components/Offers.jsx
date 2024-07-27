// eslint-disable-next-line import/no-absolute-path
import coupon from '/coupon.webp'
// eslint-disable-next-line import/no-absolute-path
import fastShipping from '/fastShipping.png'
// eslint-disable-next-line import/no-absolute-path
import wallet from '/wallet.png'
// eslint-disable-next-line import/no-absolute-path
import lowPrice from '/lowPrice.png'

export const Offers = () => {
  return (
    <section className='flex flex-col gap-8 items-center px-10 sm:px-14 xl:px-28 2xl:px-56 pb-8 mt-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-y-4 gap-x-8'>
        <div className=' md:col-span-2 lg:col-span-1 lg:row-span-2 text-center lg:text-left'>
          <h3 className='text-3xl lg:text-4xl 2xl:text-5xl font-bold'>Best deals</h3>
          <p className='text-base sm:text-lg lg:text-xl 2xl:text-2xl'>Don't miss our sales! Great discounts on your favorite products.</p>
        </div>
        <div className=' flex justify-between border border-secondaryDark dark:border-zinc-900 px-4 rounded-md hover:scale-105 transition-all'>
          <div className=' flex items-center justify-center w-[50%] text-xl 2xl:text-2xl font-bold text-center'>
            Fast Shipping
          </div>
          <img className=' w-28 py-4' src={fastShipping} alt='fast shipping truck image' />
        </div>
        <div className=' flex justify-between border border-secondaryDark dark:border-zinc-900 px-4 rounded-md hover:scale-105 transition-all'>
          <div className=' flex items-center justify-center w-[50%] text-xl 2xl:text-2xl font-bold text-center'>
            Payment Methods
          </div>
          <img className=' w-28  py-6' src={wallet} alt='wallet image' />
        </div>
        <div className=' flex justify-between border border-secondaryDark dark:border-zinc-900 px-4 rounded-md hover:scale-105 transition-all'>
          <div className=' flex items-center justify-center w-[50%] text-xl 2xl:text-2xl font-bold text-center'>
            Low Prices
          </div>
          <img className=' w-28  py-4' src={lowPrice} alt='low price logo' />
          {/* <img className='bg-black aspect-square w-1/2' src='' alt='' /> */}
        </div>
        <div className=' flex justify-between border border-secondaryDark dark:border-zinc-900 px-4 rounded-md hover:scale-105 transition-all'>
          <div className='flex items-center justify-center w-[50%] text-xl 2xl:text-2xl font-bold text-center'>
            Discount Coupons
          </div>
          <img className=' w-28  py-4' src={coupon} alt='coupon discount image' />
        </div>
      </div>
    </section>
  )
}
