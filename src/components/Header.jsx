import { ButtonMobileMenu } from './ButtonMobileMenu'
import { ReactIcon } from './icons/ReactIcon'
import { Link, NavLink } from 'react-router-dom'
import { Login } from './Login'
import { Theme } from './Theme'
import { ShopCart } from './ShopCart'

export const Header = () => {
  return (
    <header className='w-full px-6 sm:px-14 h-16 border-b border-zinc-900 flex items-center justify-between relative'>
      <Link to='/' className='flex items-center gap-2 md:w-[185px]'>
        <ReactIcon />
        <h1 className='font-bold text-xl lg:text-2xl 2xl:text-3xl'>SHOP</h1>
      </Link>
      <div>
        <nav className='items-center gap-4 hidden md:flex font-medium'>
          <NavLink to='/' className={({ isActive }) => (isActive ? ' text-primary' : undefined) + ' text-lg leading-5 2xl:text-xl 2xl:leading-6'}>Home</NavLink>
          <NavLink to='/products' className={({ isActive }) => (isActive ? ' text-primary' : undefined) + ' text-lg leading-5 2xl:text-xl 2xl:leading-6'}>Products</NavLink>
          <NavLink to='/about' className={({ isActive }) => (isActive ? ' text-primary' : undefined) + ' text-lg leading-5 2xl:text-xl 2xl:leading-6'}>About</NavLink>
        </nav>
      </div>
      <div className='flex items-center justify-end md:gap-1 w-[185px]'>
        <Login />
        <ShopCart />
        <div className='hidden md:block'>
          <Theme />
        </div>
        <ButtonMobileMenu />
      </div>

    </header>
  )
}
