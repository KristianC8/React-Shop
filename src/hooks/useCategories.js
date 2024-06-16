import { useId, useState } from 'react'
import { useFilteredProducts } from './useFilteredProducts'

export const useCategories = () => {
  const checkboxAllId = useId()
  const checkboxLaptopsId = useId()
  const checkboxTabletsId = useId()
  const checkboxMobileAccId = useId()
  const checkboxMensWatchesId = useId()
  const checkboxWomensWatchesId = useId()
  const checkboxMotorcycleId = useId()

  const [isSelectedCheckAll, setIsSelectedCheckAll] = useState(() => {
    const savedFilters = sessionStorage.getItem('savedFilters')
    const savedCategories = JSON.parse(savedFilters)
    if (!savedFilters || savedCategories.category.includes('all')) return true
    return false
  })
  /* global sessionStorage */
  let initialStateCheck = {
    laptops: false,
    tablets: false,
    'mobile-accessories': false,
    'mens-watches': false,
    'womens-watches': false,
    motorcycle: false
  }
  const [checkboxes, setCheckboxes] = useState(() => {
    const savedFilters = sessionStorage.getItem('savedFilters')
    const savedCategories = JSON.parse(savedFilters)
    if (!savedFilters) return initialStateCheck
    Object.keys(initialStateCheck).forEach((key) => {
      if (savedCategories.category.includes(key)) initialStateCheck = { ...initialStateCheck, [key]: true }
    })
    return initialStateCheck
  })
  const { filters, setFilters } = useFilteredProducts()

  const handleChangeCheckAll = (e) => {
    const { name } = e.target
    // Al seleccionar all se agrega al array de los filtros

    if (e.target.checked) {
      setFilters(prevState => ({
        ...prevState,
        category: []
      }))
      setFilters(prevState => ({
        ...prevState,
        category: [...prevState.category, name]
      }))
    }

    // El valor de este checkbox no cambia ya que siempre se debe mostrar informacion
    setIsSelectedCheckAll(true)

    // Al seleccionar all el resto de checkbox se desactivan
    setCheckboxes({
      laptops: false,
      tablets: false,
      'mobile-accessories': false,
      'mens-watches': false,
      'womens-watches': false,
      motorcycle: false
    })
  }

  const handleChangeCheck = (e) => {
    const { name, checked } = e.target

    // Validar que si no hay checkbox seleccionados, se seleccione all
    const checkboxesValues = Object.values(checkboxes)
    const checkedNum = checkboxesValues.filter(valor => valor === true).length
    const uncheckedNum = checkboxesValues.filter(valor => valor === false).length

    // Si solo queda un checkbox seleccionado y de deschequea se active el checkbox all
    if ((checkedNum === 1 && uncheckedNum === (checkboxesValues.length - 1)) && !checked) {
      setIsSelectedCheckAll(true)
      setCheckboxes(prevstate => (
        {
          ...prevstate,
          [name]: checked
        }
      ))
      setFilters(prevstate => ({
        ...prevstate,
        category: []
      }))
      setFilters(prevState => ({
        ...prevState,
        category: [...prevState.category, 'all']
      }))
    } else if ((uncheckedNum === 1 && checkedNum === (checkboxesValues.length - 1)) && checked) {
      // Si solo queda un checkbox  para seleccionar de las categorias, al seleccionarlo se active el checkbox all
      setIsSelectedCheckAll(true)
      setCheckboxes(prevstate => (
        {
          ...prevstate,
          [name]: checked
        }
      ))
      setFilters(prevstate => ({
        ...prevstate,
        category: []
      }))
      setFilters(prevState => ({
        ...prevState,
        category: [...prevState.category, 'all']
      }))
      setCheckboxes({
        laptops: false,
        tablets: false,
        'mobile-accessories': false,
        'mens-watches': false,
        'womens-watches': false,
        motorcycle: false
      })
    } else {
      if (e.target.checked) {
        // Si se selecciona un checkbox de categoria se valida en el estado previo estaba seleccionado all para vaciar el array de filtros
        if (filters.category.includes('all')) {
          setFilters(prevstate => ({
            ...prevstate,
            category: []
          }))
        }
        // Se realiza una validación en el array de filtros para que no se repita una categoria
        if (filters.category.includes(name)) {
          setFilters(prevState => ({
            ...prevState
          }))
        } else {
          setFilters(prevState => ({
            ...prevState,
            category: [...prevState.category, name]
          }))
        }
      } else {
        const newState = filters.category.filter(category => (category !== name))
        setFilters({
          ...filters,
          category: newState
        })
      }
      setCheckboxes(prevstate => (
        {
          ...prevstate,
          [name]: checked
        }
      ))
      setIsSelectedCheckAll(false)
    }
  }

  const categories = [{
    id: checkboxAllId,
    name: 'all',
    label: 'All',
    checked: isSelectedCheckAll
  },
  {
    id: checkboxLaptopsId,
    name: 'laptops',
    label: 'Laptops',
    checked: checkboxes.laptops
  },
  {
    id: checkboxTabletsId,
    name: 'tablets',
    label: 'Tablets',
    checked: checkboxes.tablets
  },
  {
    id: checkboxMobileAccId,
    name: 'mobile-accessories',
    label: 'Moblie Accesories',
    checked: checkboxes['mobile-accessories']
  },
  {
    id: checkboxMensWatchesId,
    name: 'mens-watches',
    label: 'Mens-Watches',
    checked: checkboxes['mens-watches']
  },
  {
    id: checkboxWomensWatchesId,
    name: 'womens-watches',
    label: 'Womens-Watches',
    checked: checkboxes['womens-watches']
  },
  {
    id: checkboxMotorcycleId,
    name: 'motorcycle',
    label: 'Motorcycle',
    checked: checkboxes.motorcycle
  }
  ]

  return { categories, handleChangeCheck, handleChangeCheckAll }
}
