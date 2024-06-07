import { Cart } from './Cart'
import { ReactIcon } from './icons/ReactIcon'

export const Header = () => {
  return (
    <header className='w-full px-14 h-16 border-b border-zinc-900 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <ReactIcon />
        <h1>SHOP</h1>
      </div>
      <div>
        <nav className='flex items-center gap-4'>
          <a href='#'>Home</a>
          <a href='#'>Products</a>
          <a href='#'>Any</a>
        </nav>
      </div>
      <div className='flex items-center gap-4'>
        <button>Login</button>
        <Cart />
        <button>Theme</button>
      </div>

    </header>
  )
}
