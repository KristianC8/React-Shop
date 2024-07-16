import { useState } from 'react'

export const Login = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false)
  const handleOpenModal = () => {
    setIsLoginVisible(true)
  }
  const handleCloseModal = () => {
    setIsLoginVisible(false)
  }
  //   const handleModalClick = (e) => {
  //     e.stopPropagation()
  //   }
  return (
    <>
      <button
        className='flex items-center hover:text-primary transition-all text-xl font-medium md:text-base p-2 md:px-2 gap-2
        md:gap-0 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary rounded-md md:focus:ring-0 md:focus:ring-inset-0
        md:focus:ring-transparent md:focus:outline-0'
        onClick={handleOpenModal}
      >
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 md:h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' /><path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' /></svg>
        <span className='hidden md:block'>Login</span>
      </button>
      <article className={`${isLoginVisible ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-screen md:h-screen z-30 bg-custom-light dark:bg-custom-dark bg-opacity-90 dark:bg-opacity-90 flex justify-center items-center`}>
        <div className='relative bg-custom-light dark:bg-custom-dark w-4/5 md:w-96 animate-fade p-10 shadow-lg dark:shadow-none
        flex flex-col gap-4 rounded-md'
        >
          <button className='absolute top-2 right-2' onClick={handleCloseModal}>Close</button>
          <h3 className='self-center'>Log In</h3>
          <div className='flex flex-col gap-1'>
            <label className='' htmlFor='user'>User</label>
            <input className='rounded-md px-2 py-1 bg-bgImgGray dark:bg-secondaryLight' type='text' name='user' id='user' value='Test User' />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='' htmlFor='password'>Password</label>
            <input className='rounded-md px-2 py-1 bg-bgImgGray dark:bg-secondaryLight' type='password' name='password' id='password' value='PassUser.007' />
          </div>
          <button className='px-4 py-2 bg-primary rounded font-bold'>LogIn</button>
        </div>
      </article>
    </>

  )
}
