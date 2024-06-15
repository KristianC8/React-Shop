import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { CartProvider } from '../context/cartContext'

export const AppLayout = () => {
  return (
    <CartProvider>
      <Header />
      <main className='w-full'>
        <Outlet />
      </main>
    </CartProvider>
  )
}

export default AppLayout
