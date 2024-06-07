import { useState, useEffect, useContext } from 'react'
import { FiltersContext } from '../context/filtersContext'
import { getProducts } from '../helpers/getProducts'

export const useFilteredProducts = () => {
  const [products, setProducts] = useState(null)
  const [errorApi, setErrorApi] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { filters, setFilters } = useContext(FiltersContext)

  const ENPOINT_PORDUCTS = 'https://dummyjson.com/products?limit=0'
  // const ENPOINT_PORDUCTS = 'https://dummyjson.com/products/category/lapto'
  // const ENPOINT_PORDUCTS = 'https://dummyjson.com/produ'

  useEffect(() => {
    // setIsLoading(true)
    // getProducts(ENPOINT_PORDUCTS)
    //   .then(response => {
    //     setErrorApi(null)
    //     if (!response) throw new Error('No se recibieron datos desde la api')
    //     setProducts(response)
    //   })
    //   .catch(error => setErrorApi(error))
    //   .finally(() => setIsLoading(false))
    const getListProducts = async () => {
      try {
        setIsLoading(true)
        setErrorApi(null)
        const response = await getProducts(ENPOINT_PORDUCTS)
        if (!response) throw new Error('No fue posible acceder a la api')
        setProducts(response)
      } catch (error) {
        setErrorApi(error)
      } finally {
        setIsLoading(false)
      }
    }
    getListProducts()
  }, [])

  const filterProducts = (products) => {
    if (!products) return
    return products.filter(product => (
      product.price >= filters.price &&
            (
              filters.category.includes('all') ||
              filters.category.includes(product.category)
            )
    ))
  }

  const filteredProducts = filterProducts(products)

  return { errorApi, isLoading, filteredProducts, filters, setFilters }
}
