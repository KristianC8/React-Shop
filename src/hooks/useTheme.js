import { useState, useEffect } from 'react'

export const useTheme = () => {
  /* global localStorage */
  const [theme, setTheme] = useState(() => {
    if (localStorage.shopTheme === 'dark' || (!('shopTheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      return 'dark'
    }
    if (localStorage.shopTheme === 'light' || (!('shopTheme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      return 'light'
    }
  })

  useEffect(() => {
    if (localStorage.shopTheme === 'dark' || (!('shopTheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleThemeLight = () => {
    setTheme(() => {
      localStorage.shopTheme = 'light'
      return 'light'
    }
    )
  }

  const handleThemeDark = () => {
    setTheme(() => {
      localStorage.shopTheme = 'dark'
      return 'dark'
    }
    )
  }

  const handleThemeSystem = () => {
    setTheme(() => {
      localStorage.removeItem('shopTheme')
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light'
      }
    }
    )
  }

  return { theme, handleThemeLight, handleThemeDark, handleThemeSystem }
}
