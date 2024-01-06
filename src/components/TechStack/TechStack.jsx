import cssIcon from '../../assets/css-icon.svg'
import expressjsIcon from '../../assets/expressjs-icon.svg'
import gitIcon from '../../assets/git-icon.svg'
import htmlIcon from '../../assets/html-icon.svg'
import jsIcon from '../../assets/js-icon.svg'
import bootstrapIcon from '../../assets/logos_bootstrap.svg'
import reactIcon from '../../assets/logos_react.svg'
import mongoIcon from '../../assets/mongodb-icon.svg'
import nodeIcon from '../../assets/nodejs-icon.svg'
import tailwindIcon from '../../assets/tailwind-icon.svg'

const TechStack = () => {
  const techIcons = [
    cssIcon,
    expressjsIcon,
    gitIcon,
    htmlIcon,
    jsIcon,
    bootstrapIcon,
    reactIcon,
    mongoIcon,
    nodeIcon,
    tailwindIcon
  ]

  return (
    <div
      id='sectionTecnologías'
      className='bg-background text-center md:h-screen flex items-center'
    >
      <div className='mx-auto max-w-screen-xl'>
        <h1 className='md:text-4xl lg:text-6xl md:mb-2 md:pl-4 text-center font-bold tracking-tighter text-text pb-6 md:pb-10 lg:pb-16'>
          Tecnologías conocidas
        </h1>
        <h2 className='md:text-2xl lg:text-4xl md:mb-2 md:pl-4 text-center font-bold tracking-tighter text-navFont md:pb-8 lg:pb-12'>
          Tecnologías con las que he trabajado recientemente
        </h2>
        <div className='flex flex-wrap justify-center items-center'>
          {techIcons.map((icon, index) => (
            <div className='w-[23%] lg:w-[15%] flex items-center justify-center my-8'>
              <img
                key={index}
                src={icon}
                alt={`Tech Icon ${index}`}
                className='w-12 md:w-24 h-auto'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
