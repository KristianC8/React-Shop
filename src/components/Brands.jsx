// eslint-disable-next-line import/no-absolute-path
import rolex from '/RolexLogo.png'
// eslint-disable-next-line import/no-absolute-path
import apple from '/AppleLogo.png'
// eslint-disable-next-line import/no-absolute-path
import ducati from '/DucatiLogo.png'
// eslint-disable-next-line import/no-absolute-path
import samsung from '/SamsungLogo.png'

export const Brands = () => {
  return (
    <section className='flex flex-col gap-8 items-center px-10 sm:px-14 xl:px-28 2xl:px-56 pb-8 mt-16'>
      <div className='text-center'>
        <h3 className='text-3xl lg:text-4xl 2xl:text-5xl font-bold text-primaryDark dark:text-primaryLight'>Leading brands that represent quality and reliability</h3>
        <p className='text-base sm:text-lg lg:text-xl 2xl:text-2xl text-secondaryLight dark:text-secondaryDark mt-4'>Products from the best brands, gathered for you in one place.</p>
      </div>
      <ul className='flex flex-wrap justify-center gap-12 md:gap-24 xl:gap-36'>
        <li className='flex'>
          <img className='h-10 sm:h-20 2xl:h-28' src={apple} alt='Apple Logo' />
        </li>
        <li className='flex'>
          <img className='h-10 sm:h-20 2xl:h-28' src={rolex} alt='Rolex Logo' />
        </li>
        <li className='flex'>
          <img className='h-10 sm:h-20 2xl:h-28' src={ducati} alt='Ducati Logo' />
        </li>
        <li className='flex'>
          <img className='h-10 sm:h-20 2xl:h-28' src={samsung} alt='Samsung Logo' />
        </li>
      </ul>
    </section>
  )
}
