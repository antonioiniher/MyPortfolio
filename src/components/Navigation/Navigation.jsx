import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/Logo.svg'
import LinkedIn from '../../assets/LinkedIn.svg'
import GitHub from '../../assets/GitHub.svg'

const navigation = [
  { name: 'Inicio', offset: 0 },
  { name: 'Tecnologías', offset: 1 },
  { name: 'Proyectos', offset: 2 },
  { name: 'Contacto', offset: 3 }
]

export default function Navigation() {
  const handleScroll = sectionId => {
    const section = document.getElementById(sectionId)
    if (section) {
      const rect = section.getBoundingClientRect()
      const offset = rect.top + window.scrollY
      const mobileOffset = rect.top + window.scrollY - 180
      if (window.innerWidth < 768) {
        window.scrollTo({
          top: mobileOffset,
          behavior: 'auto'
        })
      } else {
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        })
      }
    }
  }
  return (
    <Disclosure as='nav' className='bg-background sticky top-0'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-navFont hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 flex-shrink-0 items-center justify-center md:justify-start'>
                <img className='h-8 w-auto' src={Logo} alt='Antonio Iñiguez logo' />
              </div>
              <div className='flex items-center sm:items-stretch sm:justify-end'>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-6 items-center'>
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        onClick={() => handleScroll(`section${item.name}`)}
                        className='text-navFont rounded-md px-3 py-2 text-sm font-medium hover:text-white'
                      >
                        {item.name}
                      </a>
                    ))}
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
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  onClick={() => handleScroll(`section${item.name}`)}
                  className='text-navFont hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
