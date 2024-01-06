import DownloadButton from '../DownloadButton/DownloadButton'
import LinkedIn from '../../assets/LinkedIn.svg'
import GitHub from '../../assets/GitHub.svg'

const Footer = () => {
  return (
    <div id='sectionContacto' className='bg-background p-12'>
      <div className='text-navFont text-sm lg:text-lg mx-auto max-w-7xl'>
        <div className='flex items-center justify-between md:px-24 pb-4 border-b-2 border-card'>
          <DownloadButton />
          <div className='flex space-x-4'>
            <a
              href='https://www.linkedin.com/in/antonioiniher/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='w-6 h-6' src={LinkedIn} alt='LinkedIn logo' />
            </a>
            <a
              href='https://github.com/antonioiniher'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='w-6 h-6' src={GitHub} alt='GitHub logo' />
            </a>
          </div>
        </div>
        <div className='flex justify-end md:px-24 pt-4 text-sm'>
          <p>Hecho por: Antonio Iñiguez</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
