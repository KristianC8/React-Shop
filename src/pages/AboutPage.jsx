import logo from '../assets/img/LogoGray.svg'
import { GitHubIcon } from '../components/icons/GitHubIcon'
import { LinkedInIcon } from '../components/icons/LinkedInIcon'
import { PortfolioIcon } from '../components/icons/PortfolioIcon'

export const AboutPage = () => {
  return (
    <section className='grid place-items-center min-h-screen-dvh-mobile md:min-h-screen-dvh px-10 sm:px-14 xl:px-28 2xl:px-56 py-8'>
      <article className='flex flex-col items-center text-xl gap-3'>
        <img className='drop-shadow-[0_0_30px_rgba(8,145,178,.5)] w-48 md:w-64 2xl:w-80' src={logo} alt='Logo Kristian' />
        <div className='flex flex-col items-center'>
          Developed by
          <span className='text-primary text-2xl 2xl:text-3xl font-bold'>Kristian Cifuentes</span>
        </div>
        <nav className='flex gap-10 md:gap-6'>
          <a className='flex items-center gap-2 hover:text-primary transition-colors ' href='https://github.com/KristianC8/React-Shop' rel='noopener noreferer noreferrer' target='_blank'>
            <GitHubIcon />
            <span className='hidden md:block'>Github</span>
          </a>
          <a className='flex items-center gap-2 hover:text-primary transition-colors ' href='https://www.linkedin.com/in/kristian-dario-cifuentes-vera-bb24b5159/' rel='noopener noreferer noreferrer' target='_blank'>
            <LinkedInIcon />
            <span className='hidden md:block'>LinkedIn</span>
          </a>
          <a className='flex items-center gap-2 hover:text-primary transition-colors ' href='https://portfolio-kristian-55z.pages.dev/' rel='noopener noreferer noreferrer' target='_blank'>
            <PortfolioIcon />
            <span className='hidden md:block'>Portfolio</span>
          </a>
        </nav>
      </article>
    </section>
  )
}
