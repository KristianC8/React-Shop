import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { CartProvider } from '../context/cartContext'
import { ScrollTop } from '../components/ScrollTop'

export const AppLayout = () => {
  return (
    <CartProvider>
      <Header />
      <main className='w-full'>
        <Outlet />
      </main>
      <ScrollTop />
    </CartProvider>
  )
}

export default AppLayout
