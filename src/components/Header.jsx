import { Cart } from './Cart'
import { ButtonMobileMenu } from './ButtonMobileMenu'
import { ReactIcon } from './icons/ReactIcon'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { useState } from 'react'
import { MoonIcon } from './icons/MoonIcon'
import { SunIcon } from './icons/SunIcon'
import { SystemIcon } from './icons/SystemIcon'

export const Header = () => {
  const { theme, handleThemeLight, handleThemeDark, handleThemeSystem } = useTheme()
  const [isThemeMenuVisible, setIsThemeMenuVisible] = useState(false)

  const handleMenuTheme = () => {
    setIsThemeMenuVisible(!isThemeMenuVisible)
  }

  return (
    <header className='w-full px-6 sm:px-14 h-16 border-b border-zinc-900 flex items-center justify-between'>
      <Link to='/' className='flex items-center gap-2 md:w-[226px]'>
        <ReactIcon />
        <h1 className='font-bold text-xl'>SHOP</h1>
      </Link>
      <div>
        <nav className='items-center gap-4 hidden md:flex font-medium'>
          <NavLink to='/' className={({ isActive }) => (isActive ? ' text-cyan-600' : undefined)}>Home</NavLink>
          <NavLink to='/products' className={({ isActive }) => (isActive ? ' text-cyan-600' : undefined)}>Products</NavLink>
          <NavLink to='any' className={({ isActive }) => (isActive ? ' text-cyan-600' : undefined)}>Any</NavLink>
        </nav>
      </div>
      <div className='flex items-center gap-1'>
        <div className=' items-center gap-4 hidden md:flex font-medium'>
          <button>Login</button>
          <Cart />
        </div>
        <ButtonMobileMenu />
        <div className='relative z-20' onClick={handleMenuTheme}>
          <button className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary rounded p-2'>
            <span className={`${theme === 'light' ? 'block' : 'hidden'}
          ${theme === 'light' && ('shopTheme' in localStorage) ? 'text-primary' : 'text-inherit'}
          ${!('shopTheme' in localStorage) && 'text-inherit'}`}
            >
              <SunIcon />
            </span>
            <span className={`${theme === 'dark' ? 'block' : 'hidden'}
          ${theme === 'dark' && ('shopTheme' in localStorage) ? 'text-primary' : 'text-inherit'}
          ${!('shopTheme' in localStorage) && 'text-inherit'}`}
            >
              <MoonIcon />
            </span>
          </button>

          <div className={`${!isThemeMenuVisible ? 'hidden' : 'block'} absolute top-14 left-[-1px] backdrop-blur-lg border border-secondaryLight dark:border-secondaryDark rounded-md p-2 z-10`}>
            {/* global localStorage */}
            <button
              className={`${theme === 'light' && ('shopTheme' in localStorage) ? 'text-primary' : 'text-inherit'}`}
              onClick={handleThemeLight}
            >
              <SunIcon />
            </button>
            <button
              className={`${theme === 'dark' && ('shopTheme' in localStorage) ? 'text-primary' : 'text-inherit'}`}
              onClick={handleThemeDark}
            >
              <MoonIcon />
            </button>
            <button
              className={`${!('shopTheme' in localStorage) ? 'text-primary' : 'text-inherit'}`}
              onClick={handleThemeSystem}
            >
              <SystemIcon />
            </button>
          </div>
        </div>
      </div>

    </header>
  )
}
