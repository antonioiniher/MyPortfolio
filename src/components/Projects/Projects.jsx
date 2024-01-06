import ProjectCard from '../ProjectCard/ProjectCard'
import marvel from '../../assets/Marvel.png'
import code from '../../assets/Code.png'

const projects = [
  {
    image: marvel,
    title: 'Marvel Connect',
    description:
      'Marvel Connect" es una app que explora personajes de Marvel, ofrece detalles sobre sus historias, permite crear comunidades y organizar eventos temáticos, conectando a los fans de Marvel.',
    techStack: 'HBS, NodeJS, Express, MongoDB',
    link: 'https://github.com/antonioiniher/MarvelConnect/tree/main'
  },
  {
    image: code,
    title: 'Code Connect',
    description:
      '"Code Connect" es un proyecto en desarrollo, surgido de un bootcamp, que utiliza Javascript, React, Express y MongoDB. Se enfoca en la búsqueda y oferta de clases de programación y ha sido seleccionado para el evento Hackshow.',
    techStack: 'NodeJS, React, Express, MongoDB',
    link: 'https://code-connectt.netlify.app/'
  }
]

const Projects = () => {
  return (
    <div id='sectionProyectos' className='bg-background md:h-screen flex items-center'>
      <div className='mx-auto max-w-screen-xl'>
        <h1 className='text-center md:text-4xl lg:text-6xl md:mb-6 md:pl-4 font-bold tracking-tighter text-text pb-6 md:pb-10 lg:pb-12'>
          Proyectos
        </h1>
        <div className='mx-auto max-w-7xl px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
