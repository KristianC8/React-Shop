import { Cart } from './Cart'
import { ButtonMobileMenu } from './ButtonMobileMenu'
import { ReactIcon } from './icons/ReactIcon'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='w-full px-14 h-16 border-b border-zinc-900 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <ReactIcon />
        <h1>SHOP</h1>
      </div>
      <div>
        <nav className='items-center gap-4 hidden md:flex'>
          <NavLink to='/' className={({ isActive }) => (isActive ? ' text-cyan-600' : undefined)}>Home</NavLink>
          <NavLink to='/products' className={({ isActive }) => (isActive ? ' text-cyan-600' : undefined)}>Products</NavLink>
          <NavLink to='any' className={({ isActive }) => (isActive ? ' text-cyan-600' : undefined)}>Any</NavLink>
        </nav>
      </div>
      <div className=' items-center gap-4 hidden md:flex'>
        <button>Login</button>
        <Cart />
        <button>Theme</button>
      </div>
      <ButtonMobileMenu />

    </header>
  )
}
