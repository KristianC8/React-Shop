import laptop from '../assets/img/laptopp.webp'

export const HomePage = () => {
  return (
    <>
      <section className='principal-section min-h-screen-dvh grid grid-cols-1 md:grid-cols-2 gap-14 px-10 xl:px-28 py-7 xl:py-0 items-center'>
        <div>
          <h2 className=' text-4xl lg:text-5xl font-bold '>Power and performance with cutting-edge <span className='text-5xl lg:text-6xl font-bold text-cyan-600'>Technology</span></h2>
          <p className='text-lg lg:text-xl mt-3 text-gray-400'>Work, play and create with maximum efficiency thanks to our high-performance laptops.</p>
          <div className='flex gap-4 mt-3'>
            <button className='px-4 py-2 bg-cyan-600 rounded font-bold'>Start Shoping</button>
            <button className='px-4 py-2 bg-zinc-900 rounded font-bold'>About</button>
          </div>
        </div>
        {/* <div className=' h-4/5 bg-[url("/src/assets/img/laptopp.webp")] bg-center bg-contain bg-no-repeat ' /> */}
        <div>
          <img src={laptop} alt='Laptop image' />
        </div>
      </section>
    </>
  )
}
