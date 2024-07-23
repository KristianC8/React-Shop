import { useMobileMenu } from '../hooks/useMobileMenu'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

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
        className='inline-flex items-center justify-center p-2 rounded-md text-primaryDark dark:text-primaryLight
         hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary z-20'
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className='sr-only'>Open main menu</span>
        <div className='w-6 h-6'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M3 3h18M3 12h18M3 21h18'} />
          </svg>
        </div>
      </button>
      {
        isOpen && (
        // <div className='z-[97] w-full xl:block bg-lightColor-100 dark:bg-grayshade-500 xl:border-2 border-grayshade-50 dark:border-grayshade-300 xl:rounded-full xl:px-8 flex flex-col items-center justify-center h-screen top-0 left-0 fixed xl:h-min xl:[position:initial]'>
          <div className='mobile-menu md:hidden fixed top-0 left-0 w-full h-dvh bg-primaryLight dark:bg-primaryDark text-primaryDark dark:text-primaryLight z-10 flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-4'>
              <NavLink to='/' onClick={toggleMenu} className={({ isActive }) => (isActive ? 'text-cyan-600' : undefined) + ' block px-3 py-2 rounded-md text-2xl font-medium hover:text-primary'}>
                Home
              </NavLink>
              <NavLink to='/products' onClick={toggleMenu} className={({ isActive }) => (isActive ? 'text-cyan-600' : undefined) + ' block px-3 py-2 rounded-md text-2xl font-medium hover:text-primary'}>
                Products
              </NavLink>
              <NavLink to='any' onClick={toggleMenu} className={({ isActive }) => (isActive ? 'text-cyan-600' : undefined) + ' block px-3 py-2 rounded-md text-2xl font-medium hover:text-primary'}>
                Any
              </NavLink>
            </div>
          </div>
        )
      }
    </div>

  )
}
