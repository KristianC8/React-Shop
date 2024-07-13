import { useFilteredProducts } from '../hooks/useFilteredProducts'
import { ProductList } from './ProductList'
import { Loader } from './icons/Loader'

export const Products = () => {
  const { isLoading, errorApi, filteredProducts } = useFilteredProducts()

  return (
    <>
      {
      isLoading
        ? <Loader />
        : errorApi
          ? <p>Error Api</p>
          : <ProductList products={filteredProducts} />
      }
    </>

  )
}
