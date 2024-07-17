import { useTheme } from '../hooks/useTheme'
import { useState } from 'react'
import { MoonIcon } from './icons/MoonIcon'
import { SunIcon } from './icons/SunIcon'
import { SystemIcon } from './icons/SystemIcon'

export const Theme = () => {
  const { theme, handleThemeLight, handleThemeDark, handleThemeSystem } = useTheme()
  const [isThemeMenuVisible, setIsThemeMenuVisible] = useState(false)

  const handleMenuTheme = () => {
    setIsThemeMenuVisible(!isThemeMenuVisible)
  }

  return (
    <div className='relative z-20' onClick={handleMenuTheme}>
      <button className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary rounded p-2 md:focus:ring-0
          md:focus:ring-inset-0 md:focus:ring-transparent md:focus:outline-0 hover:text-primary transition-colors'
      >
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

      <div className={`${!isThemeMenuVisible ? 'hidden' : 'block'} absolute top-14 left-[-1px] backdrop-blur-3xl border 
          border-secondaryLight dark:border-secondaryDark rounded-md p-2 z-10 animate-fade`}
      >
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
  )
}
