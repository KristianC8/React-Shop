import { Cart } from './Cart'
import { ButtonMobileMenu } from './ButtonMobileMenu'
import { ReactIcon } from './icons/ReactIcon'
import { Link, NavLink } from 'react-router-dom'
import { Login } from './Login'
import { Theme } from './Theme'
import { ShopCart } from './ShopCart'

export const Header = () => {
  return (
    <header className='w-full px-6 sm:px-14 h-16 border-b border-zinc-900 flex items-center justify-between relative'>
      <Link to='/' className='flex items-center gap-2 md:w-[226px]'>
        <ReactIcon />
        <h1 className='font-bold text-xl'>SHOP</h1>
      </Link>
      <div>
        <nav className='items-center gap-4 hidden md:flex font-medium'>
          <NavLink to='/' className={({ isActive }) => (isActive ? ' text-primary' : undefined)}>Home</NavLink>
          <NavLink to='/products' className={({ isActive }) => (isActive ? ' text-primary' : undefined)}>Products</NavLink>
          <NavLink to='any' className={({ isActive }) => (isActive ? ' text-primary' : undefined)}>Any</NavLink>
        </nav>
      </div>
      <div className='flex items-center md:gap-1'>
        <Login />
        <ShopCart />
        <div className=' items-center gap-4 hidden md:flex font-medium'>
          <Cart />
        </div>
        <Theme />
        <ButtonMobileMenu />
      </div>

    </header>
  )
}
