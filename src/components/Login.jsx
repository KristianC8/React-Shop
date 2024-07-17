import { UserIcon } from './icons/UserIcon'
import { CloseIcon } from './icons/CloseIcon'
import { useLogin } from '../hooks/useLogin'
import { UserCircleIcon } from './icons/UserCircleIcon'

export const Login = () => {
  const {
    isAuthenticated,
    isLoginVisible,
    formData,
    handleLogout,
    isMenuUserVisible,
    handleOpenModal,
    handleCloseModal,
    handleSubmitLogin,
    handleMenuUser,
    handleMenuUserClick
  } = useLogin()

  return (
    isAuthenticated
      ? (
        <>
          <div className='cursor-pointer' onClick={handleMenuUser}>
            <UserCircleIcon />
            <nav
              onClick={handleMenuUserClick} className={`${isMenuUserVisible ? 'flex' : 'hidden'} flex-col gap-2 absolute bottom-[-72px] right-6 
            leading-4 p-2 sm:right-14 w-32 md:w-48 border dark:border-zinc-900 bg-custom-light dark:bg-custom-dark z-10`}
            >
              {/* global sessionStorage */}
              <span className='font-bold'>{sessionStorage.getItem('user').split('"')}</span>
              <button
                onClick={() => {
                  handleLogout()
                  handleMenuUser()
                }} className=' bg-primary rounded font-bold p-1'
              >Logout
              </button>
            </nav>
          </div>
        </>
        )
      : (
        <>
          <button
            className='flex items-center hover:text-primary transition-all text-xl font-medium md:text-base p-2 md:px-2 gap-2
        md:gap-0 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary rounded-md md:focus:ring-0 md:focus:ring-inset-0
        md:focus:ring-transparent md:focus:outline-0'
            onClick={handleOpenModal}
          >
            <UserIcon />
            <span className='hidden md:block'>Login</span>
          </button>
          <article className={`${isLoginVisible ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-screen md:h-screen z-30 bg-custom-light dark:bg-custom-dark bg-opacity-90 dark:bg-opacity-90 flex justify-center items-center`}>
            <dialog className='relative bg-custom-light dark:bg-custom-dark w-4/5 md:w-96 animate-fade p-10 shadow-lg dark:shadow-none
        flex flex-col gap-4 rounded-md'
            >
              <button className='absolute top-2 right-2' onClick={handleCloseModal}>
                <CloseIcon />
              </button>
              <h3 className='self-center text-xl font-bold text-primary'>Login</h3>
              <form onSubmit={handleSubmitLogin} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                  <label className='text-secondaryLight dark:text-bgImgGray' htmlFor='user'>User</label>
                  <input
                    className='rounded-md px-2 py-1 bg-bgImgGray dark:bg-secondaryLight' type='text' name='user' id='user'
                    value={formData.user} readOnly
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label className='text-secondaryLight dark:text-bgImgGray' htmlFor='password'>Password</label>
                  <input
                    className='rounded-md px-2 py-1 bg-bgImgGray dark:bg-secondaryLight' type='password' name='password' id='password'
                    value={formData.password} readOnly
                  />
                </div>
                <button type='submit' className='px-4 py-2 bg-primary rounded font-bold'>Login</button>
              </form>
            </dialog>
          </article>
        </>
        )
  )
}
