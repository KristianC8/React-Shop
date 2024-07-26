export const Offers = () => {
  return (
    <section className='flex flex-col gap-8 items-center px-10 sm:px-14 xl:px-28 2xl:px-56 pb-8 mt-24'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4'>
        <div className='bg-[#11111130] sm:col-span-2 md:col-span-1 md:row-span-2'>
          <h3 className='text-3xl lg:text-4xl 2xl:text-5xl font-bold'>Best deals</h3>
          <p className='text-base sm:text-lg lg:text-xl 2xl:text-2xl'>Don't miss our sales! Great discounts on your favorite products.</p>
        </div>
        <div className='bg-[#11111130] flex justify-between'>
          <div>1</div>
          <img className='bg-black aspect-square w-1/2' src='' alt='' />
        </div>
        <div className='bg-[#11111130] flex justify-between'>
          <div>2</div>
          <img className='bg-black aspect-square w-1/2' src='' alt='' />
        </div>
        <div className='bg-[#11111130] flex justify-between'>
          <div>3</div>
          <img className='bg-black aspect-square w-1/2' src='' alt='' />
        </div>
        <div className='bg-[#11111130] flex justify-between'>
          <div>4</div>
          <img className='bg-black aspect-square w-1/2' src='' alt='' />
        </div>
      </div>
    </section>
  )
}
