import { useEffect, useState } from 'react'

export const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop

      if (scrollPosition > 60) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const ScrollListener = handleScroll

    window.addEventListener('scroll', ScrollListener)

    return () => {
      window.removeEventListener('scroll', ScrollListener)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={`${isVisible ? 'block' : 'hidden'} bg-primary fixed bottom-4 right-4 h-11 w-11 md:h-12 md:w-12 2xl:h-16 2xl:w-16 rounded-full`}>
      <button className='h-11 w-11 md:h-12 md:w-12 2xl:h-16 2xl:w-16 rounded-full text-primaryDark dark:text-primaryLight backdrop-blur-lg' onClick={handleClick}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round' className='w-full hover:-rotate-45 motion-safe:transition'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' /><path d='M15 9l-6 6' /><path d='M15 15v-6h-6' /></svg>
      </button>
    </div>

  )
}
