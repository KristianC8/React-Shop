import { useFilteredProducts } from '../hooks/useFilteredProducts'
import { ProductList } from './ProductList'

export const Products = () => {
  const { isLoading, errorApi, filteredProducts } = useFilteredProducts()

  return (
    <>
      {
      isLoading
        ? <p>Cargando...</p>
        : errorApi
          ? <p>Error Api</p>
          : <ProductList products={filteredProducts} />
      }
    </>

  )
}
