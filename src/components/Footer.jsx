import { ReactIcon } from './icons/ReactIcon'

export const Footer = () => {
  return (
    <footer className=' grid grid-cols-2 md:grid-cols-6 w-full gap-10 md:gap-1 px-10 sm:px-14 xl:px-28 2xl:px-56 pb-8 mt-24 mb-24 border-t border-zinc-900 pt-8'>
      <div className='2xl:text-xl font-semibold col-span-2 md:col-span-2'>
        <h3 className='flex items-center gap-2 mb-1'>
          <ReactIcon />
          <span className='font-bold text-xl lg:text-2xl 2xl:text-3xl'>SHOP</span>
        </h3>
        Developed by Kristian
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-xl 2xl:text-3xl font-semibold'>Company</h3>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>About Us</a>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>Blog</a>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>Carrers</a>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>  Trends</a>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>Sustainability</a>

      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-xl 2xl:text-3xl font-semibold'>Legal</h3>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>Terms of Service</a>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>Privacy Policy</a>
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-xl 2xl:text-3xl font-semibold'>Products</h3>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>Feddback</a>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>Docs</a>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>Changelog</a>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>Roadmap</a>
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-xl 2xl:text-3xl font-semibold'>Help</h3>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>Buy</a>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>Sell</a>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>Troubleshooting</a>
        <a className='2xl:text-xl hover:text-primary transition-colors cursor-pointer'>Security Center</a>

      </div>
    </footer>
  )
}
