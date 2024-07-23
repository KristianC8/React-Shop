import { UserIcon } from './icons/UserIcon'
import { CloseIcon } from './icons/CloseIcon'
import { useLogin } from '../hooks/useLogin'
import { UserCircleIcon } from './icons/UserCircleIcon'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import toast, { Toaster } from 'react-hot-toast'

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

  const { clearCart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  const notifyAddCart = () => toast.success('successfully added to cart', {
    duration: 2000,
    position: 'bottom-center',
    className: 'bg-primaryLight dark:bg-zinc-900 text-primaryDark dark:text-primaryLight 2xl:text-2xl',
    iconTheme: {
      primary: '#0891b2',
      secondary: '#fff'
    }
  })

  return (
    isAuthenticated
      ? (
        <>
          <div className='cursor-pointer' onClick={handleMenuUser}>
            <UserCircleIcon />
            <nav
              onClick={handleMenuUserClick} className={`${isMenuUserVisible ? 'flex' : 'hidden'} flex-col gap-2 absolute rounded-md
              bottom-[-72px] 2xl:bottom-[-100px] right-6 leading-4 p-2 sm:right-14 w-32 md:w-48 border dark:border-zinc-900
              bg-custom-light dark:bg-custom-dark z-10`}
            >
              {/* global sessionStorage */}
              <span className='font-bold 2xl:text-xl'>{sessionStorage.getItem('user').split('"')}</span>
              <button
                onClick={() => {
                  handleLogout()
                  handleMenuUser()
                  clearCart()
                  if (location.pathname === '/shop_cart') {
                    navigate('./products')
                  }
                  if (location.pathname === '/payment') {
                    navigate('./products')
                  }
                }} className=' bg-primary rounded font-bold p-1 2xl:text-xl'
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
            onClick={() => handleOpenModal('login')}
          >
            <UserIcon />
            <span className='hidden md:block text-lg leading-5 2xl:text-xl 2xl:leading-6'>Login</span>
          </button>
          <article className={`${isLoginVisible ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-screen md:h-screen z-30 bg-custom-light dark:bg-custom-dark bg-opacity-90 dark:bg-opacity-90 flex justify-center items-center`}>
            <dialog className='relative bg-custom-light dark:bg-custom-dark w-4/5 md:w-96 animate-fade p-10 shadow-lg dark:shadow-none
        flex flex-col gap-4 rounded-md'
            >
              <button className='absolute top-2 right-2 text-primaryDark dark:text-primaryLight' onClick={handleCloseModal}>
                <CloseIcon />
              </button>
              <h3 className='self-center text-xl 2xl:text-3xl font-bold text-primary'>Login</h3>
              <form
                onSubmit={(e) => {
                  handleSubmitLogin(e)
                  notifyAddCart()
                }} className='flex flex-col gap-4'
              >
                <div className='flex flex-col gap-1'>
                  <label className='2xl:text-xl text-secondaryLight dark:text-bgImgGray' htmlFor='user'>User</label>
                  <input
                    className='2xl:text-xl rounded-md px-2 py-1 bg-bgImgGray dark:bg-secondaryLight text-primaryDark dark:text-primaryLight'
                    type='text' name='user' id='user' value={formData.user} readOnly
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label className='2xl:text-xl text-secondaryLight dark:text-bgImgGray' htmlFor='password'>Password</label>
                  <input
                    className='2xl:text-xl rounded-md px-2 py-1 bg-bgImgGray dark:bg-secondaryLight text-primaryDark dark:text-primaryLight'
                    type='password' name='password' id='password' value={formData.password} readOnly
                  />
                </div>
                <button type='submit' className='2xl:text-xl px-4 py-2 bg-primary rounded font-bold'>Login</button>
              </form>
            </dialog>
          </article>
          <Toaster />
        </>
        )
  )
}
