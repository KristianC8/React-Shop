import { useMobileMenu } from '../hooks/useMobileMenu'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const ButtonMobileMenu = () => {
  const { isOpen, toggleMenu } = useMobileMenu()

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <div className=' flex items-center md:hidden'>
      <button
        onClick={toggleMenu}
        className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600 z-20'
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className='sr-only'>Open main menu</span>
        <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
        </svg>
      </button>
      {
        isOpen && (
        // <div className='z-[97] w-full xl:block bg-lightColor-100 dark:bg-grayshade-500 xl:border-2 border-grayshade-50 dark:border-grayshade-300 xl:rounded-full xl:px-8 flex flex-col items-center justify-center h-screen top-0 left-0 fixed xl:h-min xl:[position:initial]'>
          <div className='md:hidden fixed top-0 left-0 w-full h-dvh bg-zinc-950 z-10 flex flex-col justify-center items-center'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link to='/' onClick={toggleMenu} className='block px-3 py-2 rounded-md text-base font-medium hover:text-cyan-600'>Home</Link>
              <Link to='/products' onClick={toggleMenu} className='block px-3 py-2 rounded-md text-base font-medium hover:text-cyan-600'>Products</Link>
              <Link to='any' onClick={toggleMenu} className='block px-3 py-2 rounded-md text-base font-medium hover:text-cyan-600'>Any</Link>
            </div>
          </div>
        )
      }
    </div>

  )
}
