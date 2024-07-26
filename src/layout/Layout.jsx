import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { ScrollTop } from '../components/ScrollTop'

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='w-full'>
        <Outlet />
      </main>
      <ScrollTop />
    </>
  )
}

export default Layout
