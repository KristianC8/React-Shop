import { createContext, useEffect, useState } from 'react'

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const initialFilter = {
    price: 0,
    category: ['all']
  }
  /* global sessionStorage */
  const [filters, setFilters] = useState(() => {
    const savedFilters = sessionStorage.getItem('savedFilters')
    return savedFilters ? JSON.parse(savedFilters) : initialFilter
  })

  useEffect(() => {
    sessionStorage.setItem('savedFilters', JSON.stringify(filters))
  }, [filters])
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
