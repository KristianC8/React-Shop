import { Filters } from './components/Filters'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { FiltersProvider } from './context/filtersContext.jsx'
import { CartProvider } from './context/cartContext'

function App () {
  return (
    <CartProvider>
      <Header />
      <main className='w-full'>
        <section className='products block md:flex gap-6 px-14 py-8'>
          <FiltersProvider>
            <Filters />
            <Products />
          </FiltersProvider>
        </section>
      </main>
    </CartProvider>
  )
}

export default App
