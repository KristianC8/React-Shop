import notFound from '../assets/img/NoResults.webp'

export const ProductsNotFound = () => {
  return (
    <div className='flex flex-col items-center w-full gap-4 2xl:gap-8 h-full px-4 md:px-14 2xl:px-28 font-bold'>
      <h3 className='text-xl md:2xl 2xl:text-3xl'><span className='text-primary'>Sorry</span>, we did not find products matching your search query</h3>
      <div className='flex justify-center'>
        <img className='w-[360px] 2xl:w-[650px]' src={notFound} alt='Products not Found' />
      </div>
      <p className='text-base sm:text-lg lg:text-xl 2xl:text-xl '>Our catalog is full of options. Keep looking.</p>
    </div>
  )
}
