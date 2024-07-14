import rolex from '../assets/img/RolexLogo.png'
import apple from '../assets/img/AppleLogo.png'
import ducati from '../assets/img/DucatiLogo.png'
import samsung from '../assets/img/SamsungLogo.png'

export const Brands = () => {
  return (
    <section className='flex flex-col gap-8 items-center px-10 xl:px-28 py-7 xl:py-12'>
      <div className='text-center'>
        <h3 className='text-3xl font-bold text-primaryDark dark:text-primaryLight'>Leading brands that represent quality and reliability</h3>
        <p className='text-secondaryLight dark:text-secondaryDark'>Products from the best brands, gathered for you in one place.</p>
      </div>
      <ul className='flex flex-wrap justify-center gap-12 md:gap-24'>
        <li className='flex'>
          <img className='h-16' src={apple} alt='Apple Logo' />
        </li>
        <li className='flex'>
          <img className='h-16' src={rolex} alt='Rolex Logo' />
        </li>
        <li className='flex'>
          <img className='h-16' src={ducati} alt='Ducati Logo' />
        </li>
        <li className='flex'>
          <img className='h-16 w-full' src={samsung} alt='Samsung Logo' />
        </li>
      </ul>
    </section>
  )
}
