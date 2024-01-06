import Profile from '../../assets/Profile.jpg'

const Presentation = () => {
  return (
    <div
      id='sectionInicio'
      className='bg-background text-text py-12 md:py-0 md:pl-16 lg:pl-24 xl:pl-36'
    >
      <div className='mx-auto max-w-7xl md:h-screen grid items-center sm:grid-cols-1 md:grid-cols-2 md: gap-16'>
        <h1 className='md:text-4xl lg:text-6xl md:pl-4 text-center sm:text-start font-bold tracking-tighter'>
          Hola👋,
          <br />
          Mi nombre es
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Antonio Iñiguez.
          </span>
          <br />
          Soy desarrollador Full-Stack.
        </h1>
        <div className='flex justify-center md:pl-6 items-center sm:justify-end xl:pl-16'>
          <div className='mx-auto max-w-6xl rounded-full w-24 h-24 md:w-40 md:h-40 lg:h-60 lg:w-60 overflow-hidden border-2'>
            <img
              className='h-full w-full object-cover'
              src={Profile}
              alt='Antonio Iñiguez photo'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentation
