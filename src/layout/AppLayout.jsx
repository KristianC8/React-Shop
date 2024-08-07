import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { ScrollTop } from '../components/ScrollTop'
import { Footer } from '../components/Footer'

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main className='w-full'>
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}

export default AppLayout
