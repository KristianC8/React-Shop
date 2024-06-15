import { Filters } from '../components/Filters'
import { Products } from '../components/Products'
import { FiltersProvider } from '../context/filtersContext.jsx'

export const ProductsPage = () => {
  return (
    <section className='products block md:flex gap-6 px-14 py-8'>
      <FiltersProvider>
        <Filters />
        <Products />
      </FiltersProvider>
    </section>
  )
}
