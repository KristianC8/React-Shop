import { useId } from 'react'
import { useCategories } from '../hooks/useCategories'
import { useFilteredProducts } from '../hooks/useFilteredProducts'
import './Filters.css'

export const Filters = () => {
  const inputPriceId = useId()
  // const inputCategoryId = useId()

  const { categories, handleChangeCheck, handleChangeCheckAll } =
    useCategories()
  const { filters, setFilters } = useFilteredProducts()

  const handleChangePrice = (e) => {
    setFilters({
      ...filters,
      price: e.target.value
    })
  }

  return (
    <aside className='filters w-full md:min-w-56 md:w-56 2xl:min-w-64 h-full flex flex-col  gap-2 md:sticky top-1 py-8 md:py-0'>
      {/* <label htmlFor={inputPriceId}>Precio</label>
      <input type='range' id={inputPriceId} min={0} max={1000} step={10} className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' /> */}
      <div className='2xl:text-xl relative mb-6 w-full'>
        <label htmlFor={inputPriceId} className=''>
          Price higher than:
        </label>
        <input
          id={inputPriceId}
          type='range'
          min='0'
          max='15990'
          step={10}
          value={filters.price}
          onChange={handleChangePrice}
          className='filters-inputPrice w-full h-3 bg-gray-200 appearance-none cursor-pointer dark:bg-zinc-950 border-2 border-primary rounded-md focus:outline-none'
        />
        {/* <span className='text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6'>Min ($0)</span> */}
        {/* <span className='text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6'>$500</span>
        <span className='text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6'>$1000</span> */}
        <span className='text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6 2xl:text-xl'>{`$${filters.price}`}</span>
      </div>
      {/* <label htmlFor={inputCategoryId}>Categoría</label>
      <select id={inputCategoryId}>
        <option value='all'>Todos</option>
        <option value='Clothes'>Ropa</option>
        <option value='Shoes'>Calzado</option>
        <option value='Electronics'>Tecnología</option>
        <option value='Miscellaneous'>Varios</option>
      </select> */}
      <div className='2xl:text-xl checkbox-container w-full flex flex-col gap-1 items-left justify-center '>
        <span>Categories:</span>
        {categories.map((category, i) => (
          // <div key={i} className='check flex gap-2 px-6 py-2 bg-gradient-to-r from-zinc-200 dark:from-zinc-900  dark:to-transparent border-x-2 border-cyan-600'>
          <label
            key={i}
            className={
              category.checked
                ? 'check flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-zinc-200 dark:from-zinc-900 border-x-2 border-primary leading-5 2xl:text-lg'
                : 'check flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-zinc-200 dark:from-zinc-900 border-l-2 border-transparent leading-5 2xl:text-lg'
            }
            htmlFor={category.id}
          >
            <input
              className=' w-4 h-4 m-0 accent-primary '
              type='checkbox'
              id={category.id}
              name={category.name}
              checked={category.checked}
              onChange={
                category.name === 'all'
                  ? handleChangeCheckAll
                  : handleChangeCheck
              }
            />
            {category.label}
          </label>
        ))}
      </div>
      {/*
      <div className='mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]'>
        <input
          className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-green-500"
          type='checkbox'
          value=''
          id='checkboxDefault'
        />
        <label
          className='inline-block ps-[0.15rem] hover:cursor-pointer'
          htmlFor='checkboxDefault'
        >
          Default checkbox
        </label>
      </div> */}
    </aside>
  )
}
