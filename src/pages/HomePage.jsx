import laptop from '../assets/img/laptopp.webp'
import { Brands } from '../components/Brands'
import { Link } from 'react-router-dom'
import { BagIcon } from '../components/icons/BagIcon'
import { Offers } from '../components/Offers'

export const HomePage = () => {
  return (
    <>
      <section className='principal-section min-h-screen-dvh grid grid-cols-1 md:grid-cols-2 gap-8 py-8 md:gap-14 items-center px-10 sm:px-14 xl:px-28 2xl:px-56'>
        <div>
          <h2 className=' text-4xl lg:text-6xl 2xl:text-7xl font-bold '>Power and performance with cutting-edge <span className='text-5xl lg:text-7xl 2xl:text-8xl font-bold text-primary'>Technology</span></h2>
          <p className='text-base sm:text-lg lg:text-xl 2xl:text-2xl mt-3 text-secondaryLight dark:text-secondaryDark'>Work, play and create with maximum efficiency thanks to our high-performance laptops.</p>
          <div className='flex flex-col sm:flex-row gap-4 mt-3'>
            <Link to='/products'>
              <button className='flex items-center justify-center gap-2 w-full sm:w-fit text-base sm:text-lg lg:text-xl 2xl:text-2xl px-4 py-2 bg-primary rounded font-bold'>
                <BagIcon />
                Start Shoping
              </button>
            </Link>
            <Link to='/about'>
              <button className='w-full sm:w-fit text-base sm:text-lg lg:text-xl 2xl:text-2xl px-4 py-2 bg-secondaryLight rounded font-bold text-primaryLight'>About</button>
            </Link>
          </div>
        </div>
        {/* <div className=' h-4/5 bg-[url("/src/assets/img/laptopp.webp")] bg-center bg-contain bg-no-repeat ' /> */}
        <div className='flex md:justify-end'>
          <img src={laptop} alt='Laptop image' className='principalSect-img drop-shadow-[0_0_8px_rgba(8,145,178,1)] w-full sm:w-4/5 md:w-11/12 2xl:w-full' />
        </div>
      </section>
      <Brands />
      <Offers />
    </>
  )
}
